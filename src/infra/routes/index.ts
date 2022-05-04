import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/hello', (req: Request, res: Response) => {
  return res.status(200).send('Hello server!');
});

export default routes;