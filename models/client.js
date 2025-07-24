import mongoose, {Schema} from "mongoose";

const clientSchema = new Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
    prenom: {
    type: String,
    required: true,
    trim: true,
  },
    email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  genre: {
    type: String,
    enum: ['Homme', 'Femme'],
    required: true,
  },
  dateNaissance: {
    type: Date,
    required: true,
  },
  ville: {
    type: String,
    required: true,
    },
}, {
  timestamps: true,

});

const Client = mongoose.model('Client', clientSchema);
export default Client;
