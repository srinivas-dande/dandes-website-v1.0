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
      inquiryType,
      message,
      consent,
    } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidPhoneNumber(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }

    const contactMessage =
      await prisma.daContactMessage.create({
        data: {
          full_name: fullName,
          email,
          phone,
          inquiry_type: inquiryType,
          message,
          consent_given: consent,
          status: "New",
        },
      });
      try {
  await transporter.sendMail({
    from: `"Dandes Academy Website" <${process.env.EMAIL_USER}>`,
    to: "srinivas@dandesacademy.com",
    replyTo: email,
    subject: `New Contact Form Submission - ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">
        <h2>New Contact Form Submission</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${fullName}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td><strong>Inquiry Type</strong></td>
            <td>${inquiryType || "Not specified"}</td>
          </tr>
          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
          <tr>
            <td><strong>Consent Given</strong></td>
            <td>${consent ? "Yes" : "No"}</td>
          </tr>
        </table>

        <br>

        <p>This lead was submitted from the Dandes Academy website.</p>
      </div>
    `,
  });
} catch (mailError) {
  console.error("Email Error:", mailError);
}

    return NextResponse.json({
      success: true,
      data: contactMessage,
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