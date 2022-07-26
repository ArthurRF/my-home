import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import './containers';
import '@shared/container';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes)

export default app;