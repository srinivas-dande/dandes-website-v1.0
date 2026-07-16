import { prisma } from "@/lib/prisma";

export async function getLatestRunningWebinar() {
  try {
    const latest = await prisma.daWebinars.findFirst({
      where: {
        status: "Running",
        dateTime: {
          gte: new Date(), // Only upcoming webinars
        },
      },
      orderBy: {
        dateTime: "asc", // Get the nearest upcoming webinar
      },
    });

    return {
      ok: true,
      data: latest ?? null,
    };
  } catch (err) {
    console.error("Webinar Service Error:", err);

    return {
      ok: false,
      data: null,
      error: "Database fetch failed",
    };
  }
}