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
  try {
    // Check if any team member's USN is already registered
    const existingUSNs = await prisma.hackRegistrations.findMany({
      where: {
        OR: [
          { leaderUsn: formData.leaderUsn },
          { member1Usn: formData.member1Usn },
          { member2Usn: formData.member2Usn },
          { member3Usn: formData.member3Usn },
        ],
      },
    });

    if (existingUSNs.length > 0) {
      return {
        error:
          "One or more team members are already registered in another team",
      };
    }

    console.log(formData);

    const registration = await prisma.hackRegistrations.create({
      data: {
        teamName: formData.teamName,
        leaderName: formData.leaderName,
        leaderUsn: formData.leaderUsn,
        leaderCurrentYear: formData.leaderCurrentYear,
        leaderPhone: formData.leaderPhone,
        leaderOfficialMail: formData.leaderOfficialMail,
        member1Name: formData.member1Name,
        member1Usn: formData.member1Usn,
        member1Year: formData.member1Year,
        member2Name: formData.member2Name,
        member2Usn: formData.member2Usn,
        member2Year: formData.member2Year,
        member3Name: formData.member3Name,
        member3Usn: formData.member3Usn,
        member3Year: formData.member3Year,
        email: formData.email,
      },
    });

    return { success: `team ${registration.teamName} registered successfully` };
  } catch (error) {
    console.error("Registration Error:", error);
    return { error: "Something went wrong during registration" };
  }
}
