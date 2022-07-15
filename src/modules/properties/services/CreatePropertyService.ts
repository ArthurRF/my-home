import { inject, injectable } from "tsyringe";

import { IPropertyRepository } from "../repositories/interfaces/IPropertyTypesRepository";
import { Property } from "@prisma/client";

interface IRequest {
    name: string;
    description?: string;
    price: number;
    size: number;
    negociation_type: string;
    bedrooms?: number;
    suits?: number;
    bathrooms?: number; 
    garages?: number; 
    property_type_slug: string;
    address_id: string;
}

@injectable()
export class CreatePropertyService {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) { }

  async execute({
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
  }: IRequest): Promise<Property> {
    const propertyType = await this.propertiesRepository.create({
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
    });

    return propertyType;
  }
}