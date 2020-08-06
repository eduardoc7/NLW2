import express from 'express';
import ClassesController from './controllers/ClassesController';
import Connectios from './controllers/Connections';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new Connectios();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;