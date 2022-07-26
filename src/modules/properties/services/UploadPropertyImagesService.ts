import { IStorageProvider } from "@shared/container/providers/StorageProvider/interfaces/IStorageProvider";
import { inject, injectable } from "tsyringe";

import { IPropertiesRepository } from "../repositories/interfaces/IPropertiesRepository";

interface IRequest {
  property_id: string;
  images_name: string[];
}

@injectable()
export class UploadPropertyImagesService {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  async execute({
    images_name,
    property_id,
  }: IRequest): Promise<void> {
    images_name.forEach(async (image) => {
      await this.propertiesRepository.createImage({
        property_id,
        link: image
      });
      await this.storageProvider.save(image, 'properties');
    });
  }
}