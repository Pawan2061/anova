-- CreateTable
CREATE TABLE "Registrations" (
    "id" TEXT NOT NULL,
    "usn" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "officialMail" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Registrations_usn_key" ON "Registrations"("usn");
