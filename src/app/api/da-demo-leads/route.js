import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidPhoneNumber } from "libphonenumber-js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


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
  await transporter.sendMail({
    from: `"Dandes Academy" <${process.env.EMAIL_USER}>`,
    to: [
      "inbound@pipelinevelocity.com",
      "hello@dandesacademy.com",
      "chaitanya@dandesacademy.com",
      "swetha@dandesacademy.com",
      "murali@dandesacademy.com",
    ],
    subject: `New Demo Lead - ${fullName} - AI & Machine Learning Program`,
    html: `
      <div style="font-family:Arial,sans-serif;background:#f5f7fa;padding:30px;">
        <div style="max-width:520px;margin:auto;background:#fff;border-radius:8px;padding:25px;box-shadow:0 2px 8px rgba(0,0,0,.05);">

          <h2 style="color:#C41E3A;">
            New AI & Machine Learning Demo Lead
          </h2>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">

            <tr>
              <td style="padding:8px;font-weight:bold;">Name</td>
              <td style="padding:8px;">${fullName}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Email</td>
              <td style="padding:8px;">${email}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Phone</td>
              <td style="padding:8px;">${phone}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Course Interested</td>
              <td style="padding:8px;">${courseInterested || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Lead Source</td>
              <td style="padding:8px;">${leadSource || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Lead Sub Source</td>
              <td style="padding:8px;">${leadSubSource || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Page URL</td>
              <td style="padding:8px;">${pageUrl || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">IP Address</td>
              <td style="padding:8px;">${ipAddress}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Lead Status</td>
              <td style="padding:8px;">${lead.lead_status}</td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">Created Time</td>
              <td style="padding:8px;">
                ${lead.created_at.toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </td>
            </tr>

          </table>

          <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">

          <p style="font-size:12px;color:#888;">
            Lead submitted from Demo Registration Form.
          </p>

        </div>
      </div>
    `,
  });
} catch (mailError) {
  console.error("Email Error:", mailError);
}
    
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
          createdAt: lead.created_at,
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