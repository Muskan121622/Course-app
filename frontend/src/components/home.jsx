// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsLoggedIn(!!user);
//   }, []);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://course-app-2-mrpv.onrender.com/api/v1/course/courses", {
//           withCredentials: true,
//         });
//         console.log("Fetched Courses:", response.data.courses);
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error in fetchCourses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("https://course-app-2-mrpv.onrender.com/api/v1/user/logout", {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error in logging out:", error);
//       toast.error(error.response?.data?.errors || "Error in logging out");
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 2, slidesToScroll: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
//               >
//                 Logout
//               </button>
//             )} 
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>


        
//       {/* Footer (Fixed Full Width and Bottom) */}
     
//       </div>
      

// <hr />
//       {/* Footer (Fixed Full Width and Bottom) */}
//       <footer className="w-full bg-gray-900 text-white py-20 mt-auto  ">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           {/* Logo and Site Name */}
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
//           </div>

//           {/* Quick Links */}
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/" className="hover:text-orange-500 transition">Home</Link>
//             <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
//             <Link to="/about" className="hover:text-orange-500 transition">About</Link>
//             <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-blue-400 transition"><FaFacebook size={24} /></a>
//             <a href="#" className="hover:text-blue-300 transition"><FaTwitter size={24} /></a>
//             <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={24} /></a>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-gray-400 mt-6 text-sm">
//           &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;















// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsLoggedIn(!!user);
//   }, []);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://course-app-2-mrpv.onrender.com/api/v1/course/courses", {
//           withCredentials: true,
//         });
//         console.log("Fetched Courses:", response.data.courses);
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error in fetchCourses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const handleUnload = () => {
//       localStorage.removeItem("user"); // Remove token on page close
//     };

//     window.addEventListener("beforeunload", handleUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleUnload);
//     };
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("https://course-app-2-mrpv.onrender.com/api/v1/user/logout", {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error in logging out:", error);
//       toast.error(error.response?.data?.errors || "Error in logging out");
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 2, slidesToScroll: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
//               >
//                 Logout
//               </button>
//             )} 
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </div>

//       <hr />

//       <footer className="w-full bg-gray-900 text-white py-20 mt-auto">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/" className="hover:text-orange-500 transition">Home</Link>
//             <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
//             <Link to="/about" className="hover:text-orange-500 transition">About</Link>
//             <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
//           </div>
//           <div className="text-center text-gray-400 mt-6 text-sm">
//             &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;




































// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsLoggedIn(!!user);
//   }, []);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(
//           "https://course-app-2-mrpv.onrender.com/api/v1/course/courses",
//           { withCredentials: true }
//         );
//         console.log("Fetched Courses:", response.data.courses);
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error in fetchCourses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(
//         "https://course-app-2-mrpv.onrender.com/api/v1/user/logout",
//         { withCredentials: true }
//       );
//       toast.success(response.data.message);
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error in logging out:", error);
//       toast.error(error.response?.data?.errors || "Error in logging out");
//     }
//   };

//   // Remove token when browser window/tab is closed
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       localStorage.removeItem("user");
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 2, slidesToScroll: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Home;






















// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check user authentication status on component mount
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsLoggedIn(!!user);
//   }, []);

//   // Fetch courses from API
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/course/courses", {
//           withCredentials: true,
//         });
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Remove token when browser window/tab is closed
//   useEffect(() => {
//     const handleUnload = () => {
//       localStorage.removeItem("user");
//     };

//     window.addEventListener("beforeunload", handleUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleUnload);
//     };
//   }, []);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/user/logout", {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error logging out:", error);
//       toast.error(error.response?.data?.errors || "Error logging out");
//     }
//   };

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
//       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button onClick={handleLogout} className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                 Logout
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </div>

//       <hr />

//       {/* Footer */}
//       <footer className="w-full bg-gray-900 text-white py-20 mt-auto">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/" className="hover:text-orange-500 transition">Home</Link>
//             <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
//             <Link to="/about" className="hover:text-orange-500 transition">About</Link>
//             <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
//           </div>
//           <div className="text-center text-gray-400 mt-6 text-sm">
//             &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;







// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

//   // Fetch courses from API
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/course/courses", {
//           withCredentials: true,
//         });
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Remove token when browser window/tab is closed
//   useEffect(() => {
//     const handleUnload = () => localStorage.removeItem("user");
//     window.addEventListener("beforeunload", handleUnload);
//     return () => window.removeEventListener("beforeunload", handleUnload);
//   }, []);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/user/logout", {}, {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error logging out:", error);
//       toast.error(error.response?.data?.errors || "Error logging out");
//     }
//   };

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
//       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button onClick={handleLogout} className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                 Logout
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </div>

//       <hr />

//       {/* Footer */}
//       <footer className="w-full bg-gray-900 text-white py-20 mt-auto">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/" className="hover:text-orange-500 transition">Home</Link>
//             <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
//             <Link to="/about" className="hover:text-orange-500 transition">About</Link>
//             <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
//           </div>
//           <div className="text-center text-gray-400 mt-6 text-sm">
//             &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;














// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import toast from "react-hot-toast";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("user"));

//   // Fetch courses from API
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/course/courses", {
//           withCredentials: true,
//         });
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/user/logout", {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       sessionStorage.removeItem("user");
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Error logging out:", error);
//       toast.error(error.response?.data?.errors || "Error logging out");
//     }
//   };

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
//       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950">
//       <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
//             <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
//           </div>
//           <div className="space-x-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <button onClick={handleLogout} className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
//                 Logout
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Main Section */}
//         <section className="text-center py-20">
//           <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
//           <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
//           <div className="space-x-4 mt-8">
//             <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
//               Explore Courses
//             </Link>
//           </div>
//         </section>

//         {/* Courses Slider */}
//         <section className="p-10">
//           <Slider {...settings}>
//             {courses.map((course) => (
//               <div key={course._id} className="p-4">
//                 <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     {course.image && course.image.url ? (
//                       <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
//                     ) : (
//                       <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
//                         No Image
//                       </div>
//                     )}
//                     <div className="p-6 text-center">
//                       <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                       <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </div>

//       <hr />

//       {/* Footer */}
//       <footer className="w-full bg-gray-900 text-white py-20 mt-auto">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/" className="hover:text-orange-500 transition">Home</Link>
//             <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
//             <Link to="/about" className="hover:text-orange-500 transition">About</Link>
//             <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
//           </div>
//           <div className="text-center text-gray-400 mt-6 text-sm">
//             &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;











import React, { useEffect, useState } from "react";
import logo from "../../public/logo.webp";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import toast from "react-hot-toast";

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("user"));

  // Check login status on mount and when sessionStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const user = sessionStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/course/courses", {
          withCredentials: true,
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await axios.get("https://course-app-4-hb1g.onrender.com/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(response.data.message);
      sessionStorage.removeItem("user");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error(error.response?.data?.errors || "Error logging out");
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-950">
      <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10 rounded-full" />
            <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
          </div>
          <div className="space-x-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
                  Login
                </Link>
                <Link to="/signup" className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
                  Signup
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded">
                Logout
              </button>
            )}
          </div>
        </header>

        {/* Main Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
          <p className="text-gray-500">Sharpen your skills with courses crafted by experts.</p>
          <div className="space-x-4 mt-8">
            <Link to="/courses" className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black">
              Explore Courses
            </Link>
          </div>
        </section>

        {/* Courses Slider */}
        <section className="p-10">
          <Slider {...settings}>
            {courses.map((course) => (
              <div key={course._id} className="p-4">
                <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    {course.image && course.image.url ? (
                      <img className="h-32 w-full object-contain" src={course.image.url} alt={course.title} />
                    ) : (
                      <div className="h-32 w-full bg-gray-700 flex items-center justify-center text-white">
                        No Image
                      </div>
                    )}
                    <div className="p-6 text-center">
                      <h2 className="text-xl font-bold text-white">{course.title}</h2>
                      <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>

      <hr />

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-20 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-lg font-bold text-orange-500">CourseHaven</h2>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            <Link to="/courses" className="hover:text-orange-500 transition">Courses</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          </div>
          <div className="text-center text-gray-400 mt-6 text-sm">
            &copy; {new Date().getFullYear()} CourseHaven. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

