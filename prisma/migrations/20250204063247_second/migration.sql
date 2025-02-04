/*
  Warnings:

  - You are about to drop the column `email` on the `Registrations` table. All the data in the column will be lost.
  - Added the required column `name` to the `Registrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registrations" DROP COLUMN "email",
ADD COLUMN     "name" TEXT NOT NULL;
