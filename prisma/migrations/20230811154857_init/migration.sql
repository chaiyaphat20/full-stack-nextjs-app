-- CreateTable
CREATE TABLE `news_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titile` VARCHAR(255) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;