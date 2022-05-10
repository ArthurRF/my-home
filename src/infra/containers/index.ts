import { container } from "tsyringe";

import { PropertyTypesRepository } from "../../modules/properties/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/properties/repositories/interfaces/IPropertyTypesRepository";

container.registerSingleton<IPropertyTypesRepository>(
  'PropertyTypesRepository',
  PropertyTypesRepository
)