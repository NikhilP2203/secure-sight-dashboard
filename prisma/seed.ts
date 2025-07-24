import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clear old data
  await prisma.incident.deleteMany();
  await prisma.camera.deleteMany();

  // Insert cameras and fetch them back
  await prisma.camera.createMany({
    data: [
      { name: "Shop Floor A", location: "Ground Floor" },
      { name: "Vault", location: "Basement" },
      { name: "Entrance", location: "Front Gate" },
    ],
  });

  // Get cameras with IDs
  const cameras = await prisma.camera.findMany();

  const types = ["Unauthorised Access", "Gun Threat", "Face Recognised"];
  const thumbnails = ["/cam1.png", "/cam2.png", "/cam3.png"];
  const now = new Date();

  // Insert 12 incidents
  for (let i = 0; i < 12; i++) {
    const camera = cameras[i % cameras.length]; // Pick camera by index
    await prisma.incident.create({
      data: {
        cameraId: camera.id, // ✅ Valid camera ID
        type: types[i % types.length],
        tsStart: new Date(now.getTime() - Math.random() * 24 * 60 * 60 * 1000),
        tsEnd: now,
        thumbnailUrl: thumbnails[i % thumbnails.length],
      },
    });
  }
}

main()
  .then(() => {
    console.log("✅ Database seeded successfully");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
