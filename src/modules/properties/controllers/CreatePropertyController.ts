import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { CreatePropertyService } from '@modules/properties/services/CreatePropertyService';

@injectable()
export class CreatePropertyController {
  async handle(req: Request, res: Response) {
    const { name, description, price, size, negociation_type, bedrooms, suits, bathrooms, garages, property_type_slug, address_id } = req.body;

    const createPropertyService = container.resolve(
      CreatePropertyService
    );

    if (!name || !price || !size || !negociation_type || !property_type_slug || !address_id) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const property = await createPropertyService.execute({
        name, 
        description, 
        price, 
        size, 
        negociation_type, 
        bedrooms, 
        suits, 
        bathrooms, 
        garages, 
        property_type_slug, 
        address_id
    });

    return res.status(201).json(property);
  }
}