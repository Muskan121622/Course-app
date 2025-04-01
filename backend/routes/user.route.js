import express from "express";
import {signup,login,logout,purchases} from "../controllers/user.controller.js"
import userMiddleware from "../middleware/user.mid.js";
const  userRoute=express.Router();
userRoute.post("/signup",signup);
userRoute.post("/login",login);
userRoute.get("/logout",logout);
userRoute.get("/purchases",userMiddleware,purchases);
export default  userRoute;