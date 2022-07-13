import { inject, injectable } from "tsyringe";

import { PropertyType } from "@prisma/client";
import { IPropertyTypesRepository } from "../repositories/interfaces/IPropertyTypesRepository";

@injectable()
export class ListPropertyTypesService {
  constructor(
    @inject('PropertyTypesRepository')
    private propertyTypesRepository: IPropertyTypesRepository
  ) {}

  async execute(): Promise<PropertyType[]> {
    return this.propertyTypesRepository.list();
  }
}