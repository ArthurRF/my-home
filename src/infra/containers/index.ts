import { container } from "tsyringe";

import { PropertyTypesRepository } from "../../modules/properties/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/properties/repositories/interfaces/IPropertyTypesRepository";
import { AddressesRepository } from "@modules/addresses/repositories/implementations/AddressesRepository";
import { IAddressesRepository } from "@modules/addresses/repositories/interfaces/IAddressesRepository";
import { IPropertiesRepository } from "@modules/properties/repositories/interfaces/IPropertiesRepository";
import { PropertiesRepository } from "@modules/properties/repositories/implementations/PropertiesRepository";

container.registerSingleton<IPropertyTypesRepository>(
  'PropertyTypesRepository',
  PropertyTypesRepository
);

container.registerSingleton<IAddressesRepository>(
  'AddressesRepository',
  AddressesRepository
);

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);