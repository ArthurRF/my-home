import { injectable } from "tsyringe";

import prisma from "infra/prisma";
import { Address } from "@prisma/client";

import { ICreateAddressDTO } from "@modules/addresses/dtos/ICreateAddressDTO";
import { IAddressesRepository } from "../interfaces/IAddressesRepository";
import { IUpdateAddressDTO } from "@modules/addresses/dtos/IUpdateAddressDTO";

@injectable()
export class AddressesRepository implements IAddressesRepository {
  async create({
    city_id,
    district,
    street,
    complement,
    number,
    reference_point
  }: ICreateAddressDTO): Promise<Address> {
    return prisma.address.create({
      data: {
        city_id,
        district,
        street,
        complement,
        number,
        reference_point
      },
      include: {
        city: {
          include: {
            state: true,
          }
        }
      }
    })
  }

  async list(): Promise<Address[]> {
    return prisma.address.findMany({
      include: {
        city: {
          include: {
            state: true
          }
        }
      }
    });
  }

  async update({
    id,
    city_id,
    district,
    street,
    complement,
    number,
    reference_point
  }: IUpdateAddressDTO): Promise<Address> {
    return prisma.address.update({
      where: { id },
      data: {
        city_id,
        district,
        street,
        complement,
        number,
        reference_point
      },
      include: {
        city: {
          include: {
            state: true
          }
        }
      }
    });
  }
}