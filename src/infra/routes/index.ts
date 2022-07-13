import { Router } from "express";

import { addressesRoutes } from "@modules/addresses/infra/http/routes/addresses.routes";
import { propertiesRoutes } from "../../modules/properties/infra/http/routes/properties.routes";

const routes = Router();

routes.use('/properties', propertiesRoutes);
routes.use('/addresses', addressesRoutes);

export default routes;