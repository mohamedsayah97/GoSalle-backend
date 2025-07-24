import Client from "../models/client.js";
import { hashPassword } from "../utils/password.utils.js";

const clientRepo = {
    async insert(data) {
        const hashedPassword = hashPassword(data.password);
        return await Client.create({ ...data, password: hashedPassword });
    },
    async insertMany(data) {
        return await Client.insertMany(data);
    },
    async delete(data) {
        return await Client.deleteOne(data);
    },
     async deleteById(id) {
    //will delete by id
    return await Client.findByIdAndDelete(id);
  }, 
   async deleteMany(data) {
    return await Client.deleteMany(data);
  },
   async update(filter, data) {
    return await Client.update(filter, data);
  },
   async updateById(id, data) {
    return await Client.findByIdAndUpdate(id, data);
  },
  async find(query) {
    return await Client.find(query);
  },
    async findOne(query) {
        return await Client.findOne(query);
    },
    async findById(id) {
        return await Client.findById(id);
    },
    async findByIdAndUpdate(id, data) {
        return await Client.findByIdAndUpdate(id, data, { new: true });
    },
    }

export default clientRepo;