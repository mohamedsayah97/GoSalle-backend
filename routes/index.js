import express from 'express';
import clientRouter from './client.route.js';

const router = express.Router();

router.use('/clients', clientRouter);

export default router;