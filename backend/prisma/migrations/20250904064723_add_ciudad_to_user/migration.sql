/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "ciudad" TEXT;
ALTER TABLE "User" ADD COLUMN "tag" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_tag_key" ON "User"("tag");
