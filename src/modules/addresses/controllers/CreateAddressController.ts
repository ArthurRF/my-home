import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreateAddressService } from "../services/CreateAddressService";

@injectable()
export class CreateAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      city_id,
      district,
      street,
      number,
      complement,
      reference_point,
    } = req.body;

    if (!city_id || !district || !street) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const createAddressService = container.resolve(
      CreateAddressService
    );

    const addressCreated = await createAddressService.execute({
      city_id,
      district,
      street,
      number,
      complement,
      reference_point
    });

    return res.status(201).send(addressCreated);
  }
}