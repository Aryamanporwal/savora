import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Auth services is running on the port ${PORT}`);
    connectDB();
});
