import { Router } from "express";
import { CreatePropertyTypeController } from "@modules/properties/controllers/CreatePropertyTypeController";
import { container } from "tsyringe";

const propertiesRoutes = Router();

const createPropertyTypeController = container.resolve(
  CreatePropertyTypeController
);

propertiesRoutes.get('/create', createPropertyTypeController.handle);

export { propertiesRoutes };