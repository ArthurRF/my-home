import { IUpdateAddressDTO } from '@modules/addresses/dtos/IUpdateAddressDTO';
import { Address } from '@prisma/client';
import { ICreateAddressDTO } from 'modules/addresses/dtos/ICreateAddressDTO';

export interface IAddressesRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
  update(data: IUpdateAddressDTO): Promise<Address>;
  list(): Promise<Address[]>;
}