-- CreateTable
CREATE TABLE "addresses" (
    "id" UUID NOT NULL,
    "city_id" INTEGER NOT NULL,
    "district" VARCHAR(150) NOT NULL,
    "street" VARCHAR(150) NOT NULL,
    "number" INTEGER,
    "complement" VARCHAR(150),
    "reference_point" VARCHAR(150),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
