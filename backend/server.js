import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//connecting database ,importing file from config folder;
connectDB();

app.get("/", (req,res) => {
    res.send(`Home page working`);
})
app.listen(PORT,() => {
    console.log(`Listening at port ${PORT}`);
})