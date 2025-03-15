import express from "express";
import {signup,login,logout} from "../controllers/admin.controller.js"

const  adminRoute=express.Router();
adminRoute.post("/signup",signup);
adminRoute.post("/login",login);
adminRoute.get("/logout",logout);

export default  adminRoute;