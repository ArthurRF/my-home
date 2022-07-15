import { PropertyType } from '@prisma/client';
import { ICreatePropertyDTO } from 'modules/properties/dtos/ICreatePropertyTypeDTO';

export interface IPropertiesRepository {
  create(data: ICreatePropertyDTO): Promise<PropertyType>;
//   list(): Promise<PropertyType[]>;
}