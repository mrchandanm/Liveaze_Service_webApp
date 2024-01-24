import express from "express";
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminDashboardRoutes from "./routes/adminDashboardRoutes.js";
import cors from 'cors';
 //import ExpressFormidable from "express-formidable";


const app=express();
dotenv.config();
connectDB();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(ExpressFormidable());

const PORT=process.env.PORT || 8080;


//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/admin",adminDashboardRoutes);
app.use("/api/v1/user",userRoutes);


app.get("/", async(req,res)=>{
   
    res.send("hello this is mykart appsss");
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`.bgYellow);
})