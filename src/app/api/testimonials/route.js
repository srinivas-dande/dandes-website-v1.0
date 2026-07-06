import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const testimonial = await prisma.daTestimonials.create({
      data: {
        batch: body.batch,
        full_name: body.full_name,
        email: body.email,
        phone_number: body.phone_number,
        current_job_role: body.current_job_role,
        current_company: body.current_company,
        company_location: body.company_location,
        career_goal: body.career_goal,
        linkedin_profile: body.linkedin_profile,
        testimonial: body.testimonial,
        photo_url: body.photo_url,
        video_testimonial: body.video_testimonial,
        consent: body.consent,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: testimonial,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Testimonial API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit testimonial.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const testimonials = await prisma.daTestimonials.findMany({
      orderBy: {
        submitted_at: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch testimonials",
      },
      { status: 500 }
    );
  }
}