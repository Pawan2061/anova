"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export type HackRegistrationData = {
  email: string;
  teamName: string;
  leaderName: string;
  leaderUsn: string;
  leaderCurrentYear: string;
  leaderPhone: string;
  leaderOfficialMail: string;
  member1Name: string;
  member1Usn: string;
  member1Year: string;
  member2Name: string;
  member2Usn: string;
  member2Year: string;
  member3Name: string;
  member3Usn: string;
  member3Year: string;
};

export async function registerUserForWorkshop(formData: FormData) {
  const usn = formData.get("usn") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const year = formData.get("year") as string;
  const department = formData.get("department") as string;
  const officialEmail = formData.get("officialEmail") as string;

  if (!usn || !name || !phone || !year || !department || !officialEmail) {
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
        name,
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

export async function registerForHack(formData: HackRegistrationData) {
  console.log(formData, "reached to prisma ");

  try {
    return "";
  } catch (error) {
    return "";
  }
}
