import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';

import { UploadPropertyImagesService } from '../services/UploadPropertyImagesService';

interface IFiles {
  filename: string;
}

@injectable()
export class UploadPropertyImagesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const uploadPropertyImagesService = container.resolve(
      UploadPropertyImagesService
    );

    const { id } = req.params;
    const images = req.files as IFiles[];

    if (!id) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const images_name = images.map((file) => file.filename);

    await uploadPropertyImagesService.execute({
      images_name,
      property_id: id,
    })

    return res.send('aaaa');
  }
}