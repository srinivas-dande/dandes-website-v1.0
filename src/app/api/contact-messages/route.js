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