import  bcrypt from "bcryptjs"
import  {z} from "zod";
import jwt from"jsonwebtoken"
   

import config from"../config.js"
import { Admin } from "../models/admin.model.js";


export  const signup=async(req,res)=>{
const {firstName ,lastName,email,password}=req.body;

const adminSchema=z.object({
    firstName:z.string().min(6,{message:"firstName must be  atleast 6  char long"}),
    lastName:z.string().min(3,{message:"lastName must be  atleast 3  char long"}),
    email:z.string().email(),
password:z.string().min(8,{message:"password must be  atleast 6  char long"}),
})
const  validateData=adminSchema.safeParse(req.body);
if(!validateData.success){
    return res.status(400).json({error:validateData.error.issues.map(err=>err.message)});
}



const hashPass=await bcrypt.hash(password,10)



try{
const existingAdmin=await Admin.findOne({email:email});
if(existingAdmin){
    return res.status(400).json({error:"admin already  exist"});
}
   
    const newAdmin=new Admin({firstName,lastName,email,password:hashPass});
    await newAdmin.save();
    res.status(201).json({message:"signup succedded",newAdmin});
}
catch(error){
    res.status(500).json({error:"error  in signup"});
    console.log("error in  signup",error)
}
};

export  const  login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const  admin=await Admin.findOne({email:email});
        const isPasswordCorrect =await bcrypt.compare(password,admin.password)
        if(!admin ||!isPasswordCorrect){
return res.status(403).json({error:"invalid credentials"})
        }
        //jwt
        const token=jwt.sign({
            id:admin._id,
            
        },config.JWT_ADMIN_PASSWORD,
     {expiresIn:"1d"});
       const cookieOptions={
         expires:new Date(Date.now()+ 24*60*60*1000),//1d
         httpOnly:true,//cant be accesed via  js  directly
         secure:process.env.NODE_ENV==="production",
         sameSite:"strict"//prevent CSRF
       }
        res.cookie("jwt",token,cookieOptions);
         res.status(201).json({message:"login  successful",admin,token})
     } catch (error) {
         res.status(500).json({error:"error  in login"});
         console.log("error in  login",error);
         
     }
 };
 export const logout=async(req,res)=>{
    try{ if(!req.cookies.jwt){
    return  res.status(401).json({error:"kindly  login  first"});
    }
    res.clearCookie("jwt");
    res.status(200).json({message:"logged  out successfully"});
   } catch(error){
        res.status(500).json({error:"error in logged  out"});
        console.log("error in  logout",error);
    }

}; 