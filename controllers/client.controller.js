import clientRepo from "../repository/client.repo.js";
import {generateToken} from "../utils/jwt.utils.js";
import { comparePassword } from "../utils/password.utils.js";

const clientController = {
    async register(req, res) {
        try {
            const data = req.body;
            const client = await clientRepo.findOne({ email: data.email });
            if (client) {
                return res.status(400).json({ message: "Client already exists" });
            }
            const newClient = await clientRepo.insert(data);
            return res.status(201).json({ data: newClient, message: "Client registered successfully" });
        } catch (error) {
          //debugging
           console.error('Erreur catchée :', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }

    },
    async login(req, res) {
    try {
      const { email, password } = req.body;
      const client = await clientRepo.findOne({ email: email });

      if (!client) {
        return res.status(400).json({ message: "This client is not found!" });
      }
      const isPasswordCorrect = await comparePassword(password, client.password);

      if (!isPasswordCorrect) {
        return res
          .status(400)
          .json({ message: "Email ou mot de passe incorrect!" });
      }

      const accessToken = generateToken(client._id);

      return res
        .status(200)
        .json({ message: "Données valide", accessToken: accessToken });
    } catch (error) {
      console.log("eureur catché : ", error)
      return res.status(500).json({ message: error.message });
    }
  },
    async list(req, res) {
    try {
      const client = await clientRepo.find();
      return res.status(200).json({ data: client, message: "Clients retrieved successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedClient = await clientRepo.updateById(id, data);
      if (!updatedClient) {
        return res.status(404).json({ message: "Client not found" });
      }
      return res.status(200).json({ data: updatedClient, message: "Client updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
    async delete(req, res) {
        try {
        const { id } = req.params;
        const deletedClient = await clientRepo.deleteById(id);
        if (!deletedClient) {
            return res.status(404).json({ message: "Client not found" });
        }
        return res.status(200).json({ message: "Client deleted successfully" });
        } catch (error) {
        return res.status(500).json({ message: error.message });
        }
    },
};

export default clientController;