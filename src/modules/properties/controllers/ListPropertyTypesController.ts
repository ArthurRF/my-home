import { container, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ListPropertyTypesService } from "../services/ListPropertyTypesService";

@injectable()
export class ListPropertyTypesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listPropertyTypesService = container.resolve(
      ListPropertyTypesService
    );
    
    const propertyTypes = await listPropertyTypesService.execute();

    return res.status(200).send(propertyTypes);
  }
}