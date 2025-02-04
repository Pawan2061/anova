/*
  Warnings:

  - You are about to drop the column `email` on the `HackRegistrations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teamName]` on the table `HackRegistrations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "HackRegistrations_email_key";

-- AlterTable
ALTER TABLE "HackRegistrations" DROP COLUMN "email";

-- CreateIndex
CREATE UNIQUE INDEX "HackRegistrations_teamName_key" ON "HackRegistrations"("teamName");
