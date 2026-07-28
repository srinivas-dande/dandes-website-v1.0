import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { blogTitle } = await req.json();

    let blog = await prisma.dbBlogViews.findUnique({
      where: {
        blogTitle,
      },
    });

    if (!blog) {
      blog = await prisma.dbBlogViews.create({
        data: {
          blogTitle,
          count: 1,
        },
      });
    } else {
      blog = await prisma.dbBlogViews.update({
        where: {
          blogTitle,
        },
        data: {
          count: {
            increment: 1,
          },
        },
      });
    }

    return NextResponse.json({
      success: true,
      count: blog.count,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}