import { Router } from "express";
import { container } from "tsyringe";

import { CreateAddressController } from "@modules/addresses/controllers/CreateAddressController";
import { ListAddressesController } from "@modules/addresses/controllers/ListAddressesController";
import { UpdateAddressController } from "@modules/addresses/controllers/UpdateAdressController";

const addressesRoutes = Router();

const createAddressController = container.resolve(
  CreateAddressController
);
const listAddressesController = container.resolve(
  ListAddressesController
);
const updateAdressController = container.resolve(
  UpdateAddressController
);

addressesRoutes.post('/create', createAddressController.handle);
addressesRoutes.get('/list', listAddressesController.handle);
addressesRoutes.post('/update', updateAdressController.handle);
export { addressesRoutes };