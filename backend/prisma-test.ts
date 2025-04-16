import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Test connection
    console.log("Testing database connection...");
    const users = await prisma.user.findMany({
      take: 2,
    });
    console.log("Connection successful!");
    console.log("Found users:", users);
  } catch (error) {
    console.error("Error connecting to database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
