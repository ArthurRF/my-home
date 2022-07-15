import { inject, injectable } from "tsyringe";

import { Address, PropertyType } from "@prisma/client";
import { IAddressesRepository } from "../repositories/interfaces/IAddressesRepository";

interface IRequest {
  id: string;
  city_id?: number;
  district?: string;
  street?: string;
  number?: number;
  complement?: string;
  reference_point?: string;
}

@injectable()
export class UpdateAddressService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) { }

  async execute({
    id,
    city_id,
    district,
    street,
    number,
    complement,
    reference_point
  }: IRequest): Promise<Address> {
    return this.addressesRepository.update({
      id,
      city_id,
      district,
      street,
      number,
      complement,
      reference_point
    });
  }
}