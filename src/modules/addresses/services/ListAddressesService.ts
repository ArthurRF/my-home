import { inject, injectable } from "tsyringe";

import { Address } from "@prisma/client";
import { IAddressesRepository } from "../repositories/interfaces/IAddressesRepository";

@injectable()
export class ListAddressesService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) { }

  async execute(): Promise<Address[]> {
    return this.addressesRepository.list();
  }
}