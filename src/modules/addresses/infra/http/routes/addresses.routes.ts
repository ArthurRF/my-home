import { Router } from "express";
import { container } from "tsyringe";

import { CreateAddressController } from "@modules/addresses/controllers/CreateAddressController";
import { ListAddressesController } from "@modules/addresses/controllers/ListAddressesController";

const addressesRoutes = Router();

const createAddressController = container.resolve(
  CreateAddressController
);
const listPropertyTypesController = container.resolve(
  ListAddressesController
);

addressesRoutes.post('/create', createAddressController.handle);
addressesRoutes.get('/list', listPropertyTypesController.handle);

export { addressesRoutes };