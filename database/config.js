import mongoose from "mongoose";

const config = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Base de donnée connecter avec succes")
    } catch (error) {
        console.log("erreur de connection sur la base de donnée")
    }

}

export default config