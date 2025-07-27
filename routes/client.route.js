import express from 'express';
import { createClientSchema, loginSchema, updateClientSchema } from '../schemas/client.schema.js';
import clientController from '../controllers/client.controller.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { authorizer } from '../middlewares/auth.middleware.js';
import { getByIdSchema } from '../schemas/core.schema.js';


const clientRouter = express.Router();

clientRouter.post('/signup', validateRequest(createClientSchema), clientController.register);

clientRouter.post('/login', validateRequest(loginSchema), clientController.login);

clientRouter.get('/list', authorizer, clientController.list);

clientRouter.put('/update/:id', authorizer, validateRequest(updateClientSchema), clientController.update);

clientRouter.delete('/delete/:id', authorizer, validateRequest(getByIdSchema), clientController.delete);

export default clientRouter;