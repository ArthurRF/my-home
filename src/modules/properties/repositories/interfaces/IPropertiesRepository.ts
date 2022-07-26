import { ICreatePropertyImageDTO } from '@modules/properties/dtos/ICreatePropertyImageDTO';
import { Property } from '@prisma/client';
import { ICreatePropertyDTO } from 'modules/properties/dtos/ICreatePropertyDTO';

export interface IPropertiesRepository {
  create(data: ICreatePropertyDTO): Promise<Property>;
  list(): Promise<Property[]>;
  createImage(data: ICreatePropertyImageDTO): Promise<void>;
}