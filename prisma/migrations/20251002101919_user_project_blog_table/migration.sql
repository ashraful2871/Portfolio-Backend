/*
  Warnings:

  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `challenges` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubLink` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liveLink` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `myContribution` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `techStack` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_userId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "link",
DROP COLUMN "title",
DROP COLUMN "userId",
ADD COLUMN     "challenges" TEXT NOT NULL,
ADD COLUMN     "githubLink" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "liveLink" TEXT NOT NULL,
ADD COLUMN     "myContribution" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "techStack" TEXT NOT NULL;
