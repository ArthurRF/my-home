import { Property } from '@prisma/client';
import { ICreatePropertyDTO } from 'modules/properties/dtos/ICreatePropertyDTO';

export interface IPropertiesRepository {
  create(data: ICreatePropertyDTO): Promise<Property>;
  list(): Promise<Property[]>;
}