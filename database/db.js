import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.set('strictQuery', true);
let Connection = mongoose.connect(
    process.env.MONGO_URI);

export default Connection;
