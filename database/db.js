import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.set('strictQuery', true);
const Connection = mongoose.connect(
    process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

export default Connection;
