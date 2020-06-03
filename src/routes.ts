import { Router } from 'express';
import knex from './database/connection';

import PointsController from  './controllers/PointsContoller';
import ItemsController from './controllers/ItemsControlle';

const routes = Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points:/id', pointsController.show);
routes.get('/points', pointsController.create);

export default routes;