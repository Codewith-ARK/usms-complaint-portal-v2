import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createComplaint(data) {
  try {
    await prisma.complaints.create({
      data: {
        title: data.title,
        description: data.body,
        date_of_creation: new Date(),
        category: data.category,
        upvotes: 0,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getAllComplaints() {
  try {
    const res = await prisma.complaints.findMany();
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
