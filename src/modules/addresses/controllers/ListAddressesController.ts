import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ListAddressesService } from "../services/ListAddressesService";

@injectable()
export class ListAddressesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAddressesService = container.resolve(
      ListAddressesService
    );

    const addressesFound = await listAddressesService.execute();

    return res.status(200).send(addressesFound);
  }
}