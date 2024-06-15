import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
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
        status: data.status
      },
    });
    return data;
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

// create user
export async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10); // Hash the password

  await prisma.users.create({
    data: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hashedPassword, // Use the hashed password
      created_at: new Date(),
      user_type: data.user_type,
      userdetails: {
        create: {
          batch_code: data.batch_code,
          department_code: data.department_code,
          faculty_id: data.faculty_id,
        },
      },
    },
  });

  return data
}

// fetch user
export async function fetchUser(data) {
  try {
    const response = await prisma.users.findUnique({ // Using findUnique instead of find
      where: {
        email: data.email,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching user:", error); // Logging the error
    throw new Error(`Failed to fetch user: ${error.message}`); // Throwing a custom error message
  }
}
