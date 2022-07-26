import { injectable } from "tsyringe";
import prisma from "../../../../infra/prisma";

import { Property } from "@prisma/client";
import { ICreatePropertyDTO } from "../../dtos/ICreatePropertyDTO";
import { IPropertiesRepository } from "../interfaces/IPropertiesRepository";
import { ICreatePropertyImageDTO } from "@modules/properties/dtos/ICreatePropertyImageDTO";

@injectable()
export class PropertiesRepository implements IPropertiesRepository {
  async create({
        name, 
        description,
        price, 
        size, 
        negociation_type, 
        bedrooms, 
        suits, 
        bathrooms, 
        garages, 
        property_type_slug, 
        address_id
  }: ICreatePropertyDTO): Promise<Property> {
    return prisma.property.create({
      data: {
        name, 
        description,
        price, 
        size, 
        negociation_type, 
        bedrooms, 
        suits, 
        bathrooms, 
        garages, 
        property_type_slug, 
        address_id
      }
    });
  }

  async list(): Promise<Property[]> {
    return prisma.property.findMany({
      where: {active: true},
      include: {address: true}
    })
  }

  async createImage({
    property_id,
    link,
  }: ICreatePropertyImageDTO): Promise<void> {
    await prisma.propertyImage.create({
      data: {
        property_id,
        link,
      }
    });
  }
}