import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js';
import cors from 'cors';



dotenv.config()
// console.log(process.env.TOKEN_SECRET);
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);


export default app