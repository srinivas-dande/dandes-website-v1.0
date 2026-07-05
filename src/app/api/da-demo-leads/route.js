import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidPhoneNumber } from "libphonenumber-js";

export async function POST(req) {
  try {
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