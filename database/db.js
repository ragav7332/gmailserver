import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.set('strictQuery', true);

const Connection = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true })
       console.log(`Connected to Database Successfully`);
    } catch (error) {
        console.log('Disconnected',error);
    }
}

export default Connection;