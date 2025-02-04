-- CreateTable
CREATE TABLE "HackRegistrations" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "leaderName" TEXT NOT NULL,
    "leaderUsn" TEXT NOT NULL,
    "leaderCurrentYear" TEXT NOT NULL,
    "leaderPhone" TEXT NOT NULL,
    "leaderOfficialMail" TEXT NOT NULL,
    "member1Name" TEXT NOT NULL,
    "member1Usn" TEXT NOT NULL,
    "member1Year" TEXT NOT NULL,
    "member2Name" TEXT NOT NULL,
    "member2Usn" TEXT NOT NULL,
    "member2Year" TEXT NOT NULL,
    "member3Name" TEXT NOT NULL,
    "member3Usn" TEXT NOT NULL,
    "member3Year" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HackRegistrations_email_key" ON "HackRegistrations"("email");
