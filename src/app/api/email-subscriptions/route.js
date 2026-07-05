import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email.",
        },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email.",
        },
        { status: 400 }
      );
    }

    const existing =
      await prisma.daEmailSubscription.findUnique({
        where: {
          email,
        },
      });

    if (existing) {
      return NextResponse.json({
        success: false,
        message:
          "This email is already subscribed.",
      });
    }

    const subscription =
      await prisma.daEmailSubscription.create({
        data: {
          email,
          status: "Subscribed",
        },
      });

    return NextResponse.json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    console.error(
      "Email Subscription Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
      },
      { status: 500 }
    );
  }
}