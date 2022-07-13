/*
  Warnings:

  - You are about to alter the column `name` on the `states` table. The data in that column could be lost. The data in that column will be cast from `VarChar(120)` to `VarChar(75)`.

*/
-- AlterTable
ALTER TABLE "states" ALTER COLUMN "name" SET DATA TYPE VARCHAR(75);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
