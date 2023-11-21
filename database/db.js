import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.set('strictQuery', true);
const Connection = mongoose.connect(process.env.MONGO_URI)


module.exports ={ Connection };