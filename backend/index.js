import express from"express"
import dotenv from"dotenv"
import mongoose from "mongoose";
import courseRoute from "./routes/course.route.js"
import orderRoute from "./routes/order.route.js"
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
dotenv.config();
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}));

app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

const port=process.env.PORT||4001;
const DB_URI=process.env.MONGO_URI

try {
    await  mongoose.connect(DB_URI);
     console.log("connected to mongodb")
  } catch (error){
      console.log(error)
  }
  app.use("/api/v1/course",courseRoute)
  app.use("/api/v1/user",userRoute);
  app.use("/api/v1/admin",adminRoute);
  app.use("/api/v1/order",orderRoute);
  cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_keys, 
    api_secret: process.env.api_secret,// Click 'View API Keys' above to copy your API secret
});

app.listen(port,()=>{
    console.log(`serverlistening  on port ${port}`)
});