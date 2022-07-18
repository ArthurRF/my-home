import { Property } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IPropertiesRepository } from "../repositories/interfaces/IPropertiesRepository";

@injectable()
export class ListPropertiesService {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute(): Promise<Property[]> {
    return this.propertiesRepository.list();
  }
}