import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "./components/home"
import Login from "./components/login"
import Signup from "./components/signup"
import {Toaster} from "react-hot-toast"
import Courses from './components/courses'
import Purchases from "./components/purchases";
import Buy from "./components/buy";
import AdminSignup from "./admin/AdminSignup";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import CourseCreate from "./admin/CourseCreate";
import UpdateCourse from "./admin/UpdateCourse";
import OurCourses from "./admin/OurCourses";
import { Navigate } from 'react-router-dom';
import  { useState, useEffect } from "react";

function App() {

  // const user = JSON.parse(localStorage.getItem("user"));
  // const admin = JSON.parse(localStorage.getItem("admin"));

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const [admin, setAdmin] = useState(() => {
    return JSON.parse(localStorage.getItem("admin"));
  });

  // This keeps user/admin in sync with localStorage after payment/login/logout
  useEffect(() => {
    const interval = setInterval(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
      setAdmin(JSON.parse(localStorage.getItem("admin")));
    }, 500); // check every 0.5s (or you can use `storage` event for multiple tabs)

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      
      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


         {/* Other Routes */}
         <Route path="/courses" element={<Courses />} />

        <Route path="/buy/:courseId" element={<Buy />} />
     
      <Route path="/purchases" element={user?<Purchases/>:<Navigate to={"/login"}/>}/>  
    
 {/* Admin Routes */}
 <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={admin ? <Dashboard /> : <Navigate to={"/admin/login"} />}
        />
        
        <Route path="/admin/create-course" element={<CourseCreate />} />
        <Route path="/admin/update-course/:id" element={<UpdateCourse />} />
        <Route path="/admin/our-courses" element={<OurCourses />} />



      </Routes>



      <Toaster/>
      
      
      </div>
  )
}

export default App;



