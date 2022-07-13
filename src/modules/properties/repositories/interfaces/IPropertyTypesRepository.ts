import { PropertyType } from '@prisma/client';
import { ICreatePropertyTypeDTO } from 'modules/properties/dtos/ICreatePropertyTypeDTO';

export interface IPropertyTypesRepository {
  create(data: ICreatePropertyTypeDTO): Promise<PropertyType>;
  list(): Promise<PropertyType[]>;
}