import { Router } from "express";
import { CreatePropertyTypeController } from "@modules/properties/controllers/CreatePropertyTypeController";
import { ListPropertyTypesController } from "@modules/properties/controllers/ListPropertyTypesController";
import { container } from "tsyringe";

const propertiesRoutes = Router();

const createPropertyTypeController = container.resolve(
  CreatePropertyTypeController
);
const listPropertyTypesController = container.resolve(
  ListPropertyTypesController
);

propertiesRoutes.post('/create', createPropertyTypeController.handle);
propertiesRoutes.get('/list', listPropertyTypesController.handle);

export { propertiesRoutes };