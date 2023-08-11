/*
  Warnings:

  - You are about to drop the column `titile` on the `news_type` table. All the data in the column will be lost.
  - Added the required column `title` to the `news_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `news_type` DROP COLUMN `titile`,
    ADD COLUMN `title` VARCHAR(255) NOT NULL;
