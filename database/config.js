import mongoose from "mongoose";

const config = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Base de données connectée avec succès");
  } catch (error) {
    console.error("Erreur de connexion à la base de données :", error.message);
  }
};

export default config;