"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function registerUser(formData: FormData) {
  const usn = formData.get("usn") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const year = formData.get("year") as string;
  const department = formData.get("department") as string;
  const officialEmail = formData.get("officialEmail") as string;

  if (!usn || !email || !phone || !year || !department || !officialEmail) {
    return { error: "All fields are required" };
  }

  try {
    const existingUser = await prisma.registrations.findUnique({
      where: { usn },
    });

    if (existingUser) {
      return { error: "USN already registered" };
    }

    // Create a new registration
    await prisma.registrations.create({
      data: {
        usn,
        email,
        phone,
        year,
        department,
        officialMail: officialEmail,
      },
    });

    return { success: "Registration successful!" };
  } catch (error) {
    console.error("Registration Error:", error);
    return { error: "Something went wrong" };
  }
}
