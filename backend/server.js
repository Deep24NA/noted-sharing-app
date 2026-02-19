import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import "dotenv/config";



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "https/localhost:5000", // it is replace with frontend URL,
    credentials: true, // this is mandatory for cookies to work 
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/" , (req , res) => {
    res.status(200).json({message:"API is running"})
});

const startServer =async () =>{
    try {
        await connectDB();
        app.listen(PORT , () =>{
            console.log(`Server is running in ${PORT}`)
        })
    } catch (error) {
        console.error("database connection failed", error)
    }
};

startServer();
