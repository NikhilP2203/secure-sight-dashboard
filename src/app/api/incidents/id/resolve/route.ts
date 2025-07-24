import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").at(-2); // Extract incident ID
    if (!id) {
      return NextResponse.json({ error: "Missing incident ID" }, { status: 400 });
    }

    await prisma.incident.update({
      where: { id: Number(id) },
      data: { resolved: true },
    });

    return NextResponse.json({ message: "Incident resolved" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to resolve incident" }, { status: 500 });
  }
}
