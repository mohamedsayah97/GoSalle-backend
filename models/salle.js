import mongoose from 'mongoose';


const salleSchema = new mongoose.Schema({
    nomSalle: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    capacite: {
        type: Number,
        required: true,
        min: 1,
    },
    adresseSalle: {
        type: String,
        required: true,
        trim: true,
    },
    prix: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        required: true,
    },
    etat: {
        type: String,
        enum: ['Disponible', 'Indisponible'],
        default: 'Disponible',
    },
    type: {
        type: String,
        enum: ['Salle de réunion', 'Salle de conférence', 'Salle de séminaire','salle des fêtes'],
        required: true,
    },
}, {
    timestamps: true,
});

const Salle = mongoose.model('Salle', salleSchema);
export default Salle;