import express from 'express';
import clientRouter from './client.route.js';
import salleRouter from './salle.route.js';

const router = express.Router();

router.use('/clients', clientRouter);
router.use('/salles', salleRouter);


export default router;