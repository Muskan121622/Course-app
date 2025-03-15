import { Course } from '../models/course.models.js';
import { Purchase } from '../models/purchase.model.js';
import { v2 as cloudinary } from 'cloudinary'; 

export const   createCourse= async (req,res)=>{  // req for input and  res  for  rendering or  showing
         const adminId=req.adminId;
     
        const {title,description,price}=req.body;
        
     try{
       if(!title || !description || !price ){
        return res.status(400).json({errors:"all fields are required"})}
       
       const {image}=req.files;
       if(!req.files || Object.keys(req.files).length===0){
         return res.status(400).json({error:"no file  uploaded"});
       }
        const  allowedFormat=["image/png","image/jpeg"]
        if(!allowedFormat.includes(image.mimetype)){
         return res.status(404).json({errors:"invaild file  format . only  png and  jpeg  are  allowed"})
        }
        //claudinary code
        const cloud_response=await cloudinary.uploader.upload(image.tempFilePath)
        if(!cloud_response || cloud_response.error)
        {
         return res.status(400).json({error:"error while uploading "})
        }
     
     
       const courseData={
         title,description,price,image:{
          public_id:cloud_response.public_id,
          url:cloud_response.url,},
     
         creatorId:adminId
                                                               
       };
      const course = await  Course.create(courseData)
      res.json({
       message:"course created ",
       course,
      });
     }
     catch(error){
       console.log(error);
       res.status(500).json({error:"error creating course"});
     }
        
     };
     export  const  updateCourse=async(req,res)=>{
         const adminId=req.adminId;
         const  {courseId}=req.params;
         const{title,description,price,image}=req.body;
         try{
           const courseSearch = await Course.findById(courseId);
           if (!courseSearch) {
             return res.status(404).json({ errors: "Course not found" });
            }
        const  course=await Course.findOneAndUpdate({
         _id:courseId,
         creatorId:adminId,
        },{
         title,description,price,image:{
           public_id:image?.public_id,
           url:image?.url ,
         },
        }
       
       
       ) ; 
       if (!course) {
          return res
            .status(404)
            .json({ errors: "can't update, created by other admin" });
        }
       
       res.status(201).json({message:"Course  updated  successfully",course})
         }
         catch(error){
           res.status(500).json({error:"error  in  course  updating"})
           console.log("error  in  course  updating",error)
         }
       
       
       
       };
       export  const deleteCourse=async(req,res)=>{
        const adminId=req.adminId;
       const  {courseId}=req.params;
       
       try {
        const course=await Course.findOneAndDelete({
          _id:courseId,
          creatorId:adminId,
        })
        if(!course){
          return res.status(404).json({error:"cant delete created by other admin"})
        }
        res.status(200).json({message:"course  deleted  successfully"})
        
       } catch (error) {
        res.status(500).json({error:"error  in  course  deleting "});
        console.log("error  in  course  deleting",error);
        
       }
      }; 
      
      import Stripe from "stripe";
import config from "../config.js";
const stripe = new Stripe(config.STRIPE_SECRET_KEY);
console.log(config.STRIPE_SECRET_KEY);
export const buyCourses = async (req, res) => {
  const { userId } = req;
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ errors: "Course not found" });
    }
    const existingPurchase = await Purchase.findOne({ userId, courseId });
    if (existingPurchase) {
      return res
        .status(400)
        .json({ errors: "User has already purchased this course" });
    }

    // stripe payment code goes here!!
    const amount = course.price;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(201).json({
      message: "Course purchased successfully",
      course,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ errors: "Error in course buying" });
    console.log("error in course buying ", error);
  }
};
      export  const  getCourses=async(req,res)=>{
        try {const  courses=await Course.find({})
        res.status(201).json({courses})
        
        
          
        } catch (error) {
          res.status(500).json({error:"error  in  getting  courses"})
          console.log("error to  get  courses",error)
          
        }
        };
        export  const CourseDetails=async (req,res)=>{
            const  {courseId}=req.params;
            try {
              const course=await Course.findById(courseId);
             
             if(!course){
              return  res.status(404).json({error:"course  not  found"})}
              res.status(200).json({course});
            } catch (error) {
               return  res.status(500).json({error:"error  in  getting course  details"});
               console.log("error  in course  details",error);
              
            }
          };