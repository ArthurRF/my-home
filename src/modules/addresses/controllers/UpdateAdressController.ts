import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { UpdateAddressService } from "../services/UpdateAddressService";

@injectable()
export class UpdateAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      id,
      city_id,
      district,
      street,
      number,
      complement,
      reference_point,
    } = req.body;

    if (!id) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const updateAddressService = container.resolve(
      UpdateAddressService
    );

    const addressUpdated = await updateAddressService.execute({
      id,
      city_id,
      district,
      street,
      number,
      complement,
      reference_point
    });

    return res.status(201).send(addressUpdated);
  }
}