import { connect } from "mongoose";
import app from "./app.js"
import config from './database/config.js'


const PORT =process.env.PORT || 3000;
config();



app.listen(PORT,()=>{
    console.log(`serveur connecter sur le port ${PORT}`);

})