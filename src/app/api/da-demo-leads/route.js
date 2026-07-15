import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidPhoneNumber } from "libphonenumber-js";

const WORKING_WEBHOOK =
  "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY0MDYzMTA0MzA1MjZkNTUzZCI_3D_pc/IjU3NjcwNTY5MDYzMDA0MzY1MjY0NTUzZDUxMzAi_pc";

const STUDENT_WEBHOOK =
  "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY0MDYzMTA0MzA1MjZkNTUzZCI_3D_pc/IjU3NjcwNTY5MDYzMDA0MzY1MjY0NTUzZDUxMzEi_pc";

export async function POST(req) {
  try {

    console.log(
      "DATABASE_URL:",
      process.env.DATABASE_URL?.replace(/\/\/.*@/, "//****:****@")
    );
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      candidateType,
      currentJobRole,
      experienceRange,
      qualification,
      yearOfPassout,
      careerGoal,
      preferredBatch,
      city,
      leadSource,
      leadSubSource,
      pageUrl,
      courseInterested,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required",
        },
        { status: 400 }
      );
    }

    if (!isValidPhoneNumber(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number",
        },
        { status: 400 }
      );
    }

    const forwarded = req.headers.get("x-forwarded-for");

    const ipAddress = forwarded
      ? forwarded.split(",")[0]
      : "Unknown";

    
    const lead = await prisma.daDemoLead.create({
      data: {
        full_name: fullName,
        email,
        phone,

        candidate_type: candidateType,
        current_job_role: currentJobRole,
        experience_range: experienceRange,

        qualification,
        year_of_passout: yearOfPassout,

        career_goal: careerGoal,
        preferred_batch: preferredBatch,
        city,

        lead_source: leadSource,
        lead_sub_source: leadSubSource,

        page_url: pageUrl,
        course_interested: courseInterested,
        ip_address: ipAddress,

        lead_status: "New",
      },
    });

    
    try {
      let webhookUrl = "";
      let webhookPayload = {};

      const studentCandidateTypes = [
        "Student",
        "Job Seeker",
      ];

      if (studentCandidateTypes.includes(candidateType)) {
        
        webhookUrl = STUDENT_WEBHOOK;

        webhookPayload = {
          fullName,
          email,
          phone,
          candidateType,
          qualification,
          yearOfPassout,
          careerGoal,
          preferredBatch,
          city,
          leadSource,
          leadSubSource,
          pageUrl,
          courseInterested,
        };
      } else {
        
        webhookUrl = WORKING_WEBHOOK;

        webhookPayload = {
          fullName,
          email,
          phone,
          candidateType,
          currentJobRole,
          experienceRange,
          careerGoal,
          preferredBatch,
          city,
          leadSource,
          leadSubSource,
          pageUrl,
          courseInterested,
        };
      }

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error(
          "Webhook failed:",
          webhookResponse.status,
          await webhookResponse.text()
        );
      }
    } catch (webhookError) {
      console.error("Webhook Error:", webhookError);
    }

    return NextResponse.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}