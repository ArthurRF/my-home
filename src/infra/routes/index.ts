import { Router } from "express";
import { propertiesRoutes } from "../../modules/properties/infra/http/routes/properties.routes";

const routes = Router();

routes.use('/properties', propertiesRoutes);
// routes.use('/addresses', addressesRoutes);

export default routes;