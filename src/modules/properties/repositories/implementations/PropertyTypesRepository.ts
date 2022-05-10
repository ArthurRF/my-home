import { injectable } from "tsyringe";
import prisma from "../../../../infra/prisma";

import { PropertyType } from "@prisma/client";
import { ICreatePropertyTypeDTO } from "../../dtos/ICreatePropertyTypeDTO";
import { IPropertyTypesRepository } from "../interfaces/IPropertyTypesRepository";

@injectable()
export class PropertyTypesRepository implements IPropertyTypesRepository {
  async create({
    slug,
    name,
    description
  }: ICreatePropertyTypeDTO): Promise<PropertyType> {
    return prisma.propertyType.create({
      data: {
        slug,
        name,
        description
      }
    });
  }

}