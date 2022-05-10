import { inject, injectable } from "tsyringe";

import { IPropertyTypesRepository } from "../repositories/interfaces/IPropertyTypesRepository";
import { PropertyType } from "@prisma/client";

interface IRequest {
  slug: string;
  name: string;
  description: string;
}

@injectable()
export class CreatePropertyTypeService {
  constructor(
    @inject('PropertyTypesRepository')
    private propertyTypesRepository: IPropertyTypesRepository
  ) { }

  async execute({
    slug,
    name,
    description
  }: IRequest): Promise<PropertyType> {
    const propertyType = await this.propertyTypesRepository.create({
      slug,
      name,
      description
    });

    return propertyType;
  }
}