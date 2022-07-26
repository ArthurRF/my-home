import { Router } from "express";
import multer from 'multer';
import { container } from "tsyringe";

import uploadConfig from '@config/upload';

import { CreatePropertyTypeController } from "@modules/properties/controllers/CreatePropertyTypeController";
import { ListPropertyTypesController } from "@modules/properties/controllers/ListPropertyTypesController";
import { CreatePropertyController } from "@modules/properties/controllers/CreatePropertyController";
import { ListPropertiesController } from "@modules/properties/controllers/ListPropertiesController";
import { UploadPropertyImagesController } from "@modules/properties/controllers/UploadPropertyImagesController";

const propertiesRoutes = Router();

const upload = multer(uploadConfig);

const createPropertyTypeController = container.resolve(
  CreatePropertyTypeController
);
const listPropertyTypesController = container.resolve(
  ListPropertyTypesController
);
const createPropertyController = container.resolve(
  CreatePropertyController
);
const listPropertiesController = container.resolve(
  ListPropertiesController
);
const uploadPropertyImagesController = container.resolve(
  UploadPropertyImagesController
);

// Types of properties
propertiesRoutes.post('/type/create', createPropertyTypeController.handle);
propertiesRoutes.get('/type/list', listPropertyTypesController.handle);

// Properties
propertiesRoutes.post('/create', createPropertyController.handle);
propertiesRoutes.get('/list', listPropertiesController.handle);

// Property images
propertiesRoutes.post(
  '/images/:id',
  upload.array('images'),
  uploadPropertyImagesController.handle
)

export { propertiesRoutes };