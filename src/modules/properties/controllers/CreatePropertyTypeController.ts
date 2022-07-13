import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { CreatePropertyTypeService } from '@modules/properties/services/CreatePropertyTypeService';

@injectable()
export class CreatePropertyTypeController {
  async handle(req: Request, res: Response) {
    const { slug, name, description } = req.body;

    const createPropertyTypeService = container.resolve(
      CreatePropertyTypeService
    );

    if (!slug || !name || !description) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const propertyType = await createPropertyTypeService.execute({
      slug,
      name,
      description
    });

    return res.status(201).json(propertyType);
  }
}