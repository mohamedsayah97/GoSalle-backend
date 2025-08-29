import express from "express";
import salleController from "../controllers/salle.controller.js";
import upload from "../middlewares/uploadPic.js";
import { authorizer } from "../middlewares/auth.middleware.js";

const salleRouter = express.Router();
salleRouter.post('/create',upload.array("image",6), salleController.create);
salleRouter.get('/list',authorizer , salleController.list);
// salleRouter.get('/list/:id', salleController.getSalleById);
salleRouter.put('/update/:id',authorizer , salleController.update);
salleRouter.delete('/delete/:id',authorizer , salleController.delete);

export default salleRouter;
