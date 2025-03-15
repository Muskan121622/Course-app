import express from "express"
import { createCourse ,CourseDetails,updateCourse,deleteCourse,getCourses,buyCourses} from "../controllers/course.controller.js";
import userMiddleware from "../middleware/user.mid.js"
import adminMiddleware from "../middleware/admin.mid.js";
const router=express.Router()
router.post("/create",adminMiddleware,createCourse);
router.put("/update/:courseId",adminMiddleware,updateCourse)
router.delete("/delete/:courseId",adminMiddleware,deleteCourse)
router.get("/courses",getCourses)
router.get("/:courseId",CourseDetails);
router.post("/buy/:courseId",userMiddleware,buyCourses)
export default router;
// import express from "express";
//   //  import {createCourse } from"../controllers/course.controllers.js"
// import {createCourse,CourseDetails ,updateCourse,deleteCourse,getCourses} from "../controllers/course.controllers.js"
// import userMiddleware from "../middleware/user.mid.js";
// //import adminMiddleware from "../middleware/admin.mid.js";
// const  router=express.Router();
// router.post("/create",createCourse)
//  router.put("/update/:courseId",updateCourse)
//  router.delete("/delete/:courseId",deleteCourse)
//  router.get("/courses",getCourses)
//  router.get("/:courseId",CourseDetails);
// router.post("/buy/:courseId",userMiddleware,buyCourses)
// export default  router;