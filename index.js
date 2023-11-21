import express from "express";
import cors from "cors";
import mailRoutes from "./routes/mailRoutes.js";
import Connection from "./database/db.js";

const app = express()
const port = process.env.PORT || 8080;
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use('/', mailRoutes)
Connection()

app.listen(port, async() => { 
    try{
        await Connection;
        console.log("Database has been connected");
    }catch(error){
        console.log("Database has not been connected");
    }
    console.log(`server is running on port ${port}`); 
})