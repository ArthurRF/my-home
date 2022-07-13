import { inject, injectable } from "tsyringe";

import { Address, PropertyType } from "@prisma/client";
import { IAddressesRepository } from "../repositories/interfaces/IAddressesRepository";

interface IRequest {
  city_id: number;
  district: string;
  street: string;
  number?: number;
  complement?: string;
  reference_point?: string;
}

@injectable()
export class CreateAddressService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) { }

  async execute({
    city_id,
    district,
    street,
    number,
    complement,
    reference_point
  }: IRequest): Promise<Address> {
    return this.addressesRepository.create({
      city_id,
      district,
      street,
      number,
      complement,
      reference_point
    });
  }
}