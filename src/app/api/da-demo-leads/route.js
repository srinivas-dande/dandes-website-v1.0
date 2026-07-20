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
        lead_source: leadSource,
        lead_sub_source: leadSubSource,
        page_url: pageUrl,
        course_interested: courseInterested,
        ip_address: ipAddress,
        lead_status: "New",
      },
    });
    
    try {
      const webhookResponse = await fetch("https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY0MDYzMTA0MzA1MjZkNTUzZCI_3D_pc/IjU3NjcwNTY5MDYzMTA0MzU1MjY5NTUzMzUxM2Ii_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          leadSource,
          leadSubSource,
          pageUrl,
          courseInterested,
          leadStatus: lead.lead_status,
        }),
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
      message: "Lead saved successfully",
      data: lead,
    });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}