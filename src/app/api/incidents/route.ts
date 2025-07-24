import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch incidents with their related camera details
    const incidents = await prisma.incident.findMany({
      include: {
        camera: true, // Include camera details (name, location)
      },
      orderBy: {
        tsStart: "desc", // Latest incidents first
      },
    });

    return NextResponse.json(incidents);
  } catch (error) {
    console.error("Error fetching incidents:", error);
    return NextResponse.json({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}
