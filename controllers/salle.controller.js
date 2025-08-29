import { file } from "zod";
import salleRepo from "../repository/salle.repo.js";

const salleController = {
    async create(req, res) {
  try {
    const data = req.body;
    const files = req.files; // Assumes que req.files est un tableau d'objets fichier uploadés

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "Aucune image fournie" });
    }

    // Upload des images vers Cloudinary
    const uploadImages = files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    });

    // Attend que tous les uploads soient terminés
    const imagesUrls = await Promise.all(uploadImages);

    // Ajoute les URLs des images à la data de la salle
    data.images = imagesUrls;

    // Crée la nouvelle salle avec les URLs des images
    const newSalle = await salleRepo.insert(data);

    return res.status(201).json({ data: newSalle, message: "Salle created successfully" });
  } catch (error) {
    console.error('Erreur catchée :', error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
},
    async list(req, res) {
        try {
            const salles = await salleRepo.find();
            return res.status(200).json({ data: salles, message: "Salles retrieved successfully" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedSalle = await salleRepo.updateById(id, data);
            if (!updatedSalle) {
                return res.status(404).json({ message: "Salle not found" });
            }
            return res.status(200).json({ data: updatedSalle, message: "Salle updated successfully" });
        } catch (error) {
            console.error('Erreur catchée :', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedSalle = await salleRepo.deleteById(id);
            if (!deletedSalle) {
                return res.status(404).json({ message: "Salle not found" });
            }
            return res.status(200).json({ message: "Salle deleted successfully" });
        } catch (error) {
            console.error('Erreur catchée :', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
};

export default salleController;


