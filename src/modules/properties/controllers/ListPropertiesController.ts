import { container, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ListPropertiesService } from "../services/ListPropertiesService";

@injectable()
export class ListPropertiesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listPropertiesService = container.resolve(
        ListPropertiesService
    );
    
    const properties = await listPropertiesService.execute();

    return res.status(200).send(properties);
  }
}