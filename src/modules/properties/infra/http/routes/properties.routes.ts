import { Router } from "express";
import { CreatePropertyTypeController } from "@modules/properties/controllers/CreatePropertyTypeController";
import { ListPropertyTypesController } from "@modules/properties/controllers/ListPropertyTypesController";
import { container } from "tsyringe";
import { CreatePropertyController } from "@modules/properties/controllers/CreatePropertyController";
import { ListPropertiesController } from "@modules/properties/controllers/ListPropertiesController";

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

const listPropertiesController = container.resolve(
  ListPropertiesController
);

// Types of properties
propertiesRoutes.post('/type/create', createPropertyTypeController.handle);
propertiesRoutes.get('/type/list', listPropertyTypesController.handle);

// Properties
propertiesRoutes.post('/create', createPropertyController.handle);
propertiesRoutes.get('/list', listPropertiesController.handle);

export { propertiesRoutes };