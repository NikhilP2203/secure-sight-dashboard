import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const updatedIncident = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updatedIncident);
}
