import { injectable } from "tsyringe";
import prisma from "../../../../infra/prisma";

import { Property } from "@prisma/client";
import { ICreatePropertyDTO } from "../../dtos/ICreatePropertyDTO";
import { IPropertiesRepository } from "../interfaces/IPropertiesRepository";

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
}