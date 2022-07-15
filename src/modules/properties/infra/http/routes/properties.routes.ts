import { Router } from "express";
import { CreatePropertyTypeController } from "@modules/properties/controllers/CreatePropertyTypeController";
import { ListPropertyTypesController } from "@modules/properties/controllers/ListPropertyTypesController";
import { container } from "tsyringe";
import { CreatePropertyController } from "@modules/properties/controllers/CreatePropertyController";

const propertiesRoutes = Router();

const createPropertyTypeController = container.resolve(
  CreatePropertyTypeController
);
const listPropertyTypesController = container.resolve(
  ListPropertyTypesController
);
const createPropertyController = container.resolve(
  CreatePropertyController
);

propertiesRoutes.post('/type/create', createPropertyTypeController.handle);
propertiesRoutes.get('/type/list', listPropertyTypesController.handle);

propertiesRoutes.post('/create', createPropertyController.handle);

export { propertiesRoutes };