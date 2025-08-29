import Salle from "../models/salle.js";

const salleRepo = {
    async insert(data) {
        return await Salle.create(data);
    },
    async insertMany(data) {
        return await Salle.insertMany(data);
    },
    async delete(data) {
        return await Salle.deleteOne(data);
    },
    async deleteById(id) {
        return await Salle.findByIdAndDelete(id);
    },
    async deleteMany(data) {
        return await Salle.deleteMany(data);
    },
    async update(filter, data) {
        return await Salle.update(filter, data);
    },
    async updateById(id, data) {
        return await Salle.findByIdAndUpdate(id, data, { new: true });
    },
    async find(query) {
        return await Salle.find(query);
    },
    async findOne(query) {
        return await Salle.findById(query);
    },
    async findById(id) {
        return await Salle.findById(id);
    },
    async findByIdAndUpdate(id, data) {
        return await Salle.findByIdAndUpdate(id, data, { new: true });
    },
};
export default salleRepo;