-- CreateTable
CREATE TABLE "properties" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" VARCHAR(500),
    "price" DOUBLE PRECISION NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "size" INTEGER NOT NULL,
    "negociation_type" VARCHAR(10) NOT NULL,
    "bedrooms" INTEGER,
    "suits" INTEGER,
    "bathrooms" INTEGER,
    "garages" INTEGER,
    "property_type_slug" VARCHAR(20) NOT NULL,
    "address_id" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_property_type_slug_fkey" FOREIGN KEY ("property_type_slug") REFERENCES "property_types"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
