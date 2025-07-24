import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const incidents = await prisma.incident.findMany({
      include: { camera: true },
      orderBy: { tsStart: "desc" },
    });

    return NextResponse.json(incidents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}
