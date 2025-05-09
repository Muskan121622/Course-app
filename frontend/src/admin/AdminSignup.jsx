// import React, { useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// //import { BACKEND_URL } from "../utils/utils";
// function AdminSignup() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         `http://localhost:1227/api/v1/admin/signup`,
//         {
//           firstName,
//           lastName,
//           email,
//           password,
//         },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Sugnup successful: ", response.data);
//       toast.success(response.data.message);
//       navigate("/admin/login");
//     } catch (error) {
//       if (error.response) {
//         setErrorMessage(error.response.data.errors || "AdminSignup failed!!!");
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950 ">
//       <div className="h-screen container mx-auto flex  items-center justify-center text-white">
//         {/* Header */}
//         <header className="absolute top-0 left-0 w-full flex justify-between items-center p-5  ">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//             <Link to={"/"} className="text-xl font-bold text-orange-500">
//               CourseHaven
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link
//               to={"/admin/login"}
//               className="bg-transparent border border-gray-500 py-2 px-4 rounded-md"
//             >
//               Login
//             </Link>
//             <Link
//               to={"/courses"}
//               className="bg-orange-500 py-2 px-4 rounded-md"
//             >
//               Join now
//             </Link>
//           </div>
//         </header>

//         {/* AdminSignup Form */}
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[500px] mt-20">
//           <h2 className="text-2xl font-bold mb-4 text-center">
//             Welcome to <span className="text-orange-500">CourseHaven</span>
//           </h2>
//           <p className="text-center text-gray-400 mb-6">
//             Just signup to mess with dashboard!
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="firstname" className=" text-gray-400 mb-2">
//                 Firstname
//               </label>
//               <input
//                 type="text"
//                 id="firstname"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Type your firstname"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="lastname" className=" text-gray-400 mb-2">
//                 Lastname
//               </label>
//               <input
//                 type="text"
//                 id="lastname"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Type your lastname"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className=" text-gray-400 mb-2">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="name@email.com"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className=" text-gray-400 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="********"
//                   required
//                 />
//                 <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
//                   👁️
//                 </span>
//               </div>
//             </div>
//             {errorMessage && (
//               <div className="mb-4 text-red-500 text-center">
//                 {errorMessage}
//               </div>
//             )}
//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition"
//             >
//               Signup
//             </button>


//              {/* 🚀 Back to Home Text Navigation */}
//   <p className="mt-4 text-center text-gray-400">
//     <Link to="/" className="text-orange-500 hover:underline">
//       Back to Home
//     </Link>
//   </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminSignup;
















import React, { useState } from "react";
import logo from "../../public/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; // Import Eye icons

function AdminSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for eye toggle
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://course-app-4-hb1g.onrender.com/api/v1/admin/signup`,
        { firstName, lastName, email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Signup successful: ", response.data);
      toast.success(response.data.message);
      navigate("/admin/login");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.errors || "Signup failed!!!");
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-950">
      <div className="h-screen container mx-auto flex items-center justify-center text-white">
        
        {/* Header */}
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-5">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <Link to="/" className="text-xl font-bold text-orange-500">
              CourseHaven
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/admin/login" className="border border-gray-500 py-2 px-4 rounded-md">
              Login
            </Link>
            <Link to="/courses" className="bg-orange-500 py-2 px-4 rounded-md">
              Join now
            </Link>
          </div>
        </header>

        {/* Admin Signup Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[500px] mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to <span className="text-orange-500">CourseHaven</span>
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Just signup to mess with dashboard!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstname" className="text-gray-400 mb-2">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your firstname"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastname" className="text-gray-400 mb-2">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your lastname"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  required
                />
                <span
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
            )}

            <button type="submit" className="w-full bg-orange-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition">
              Signup
            </button>

            {/* Back to Home Navigation */}
            <p className="mt-4 text-center text-gray-400">
              <Link to="/" className="text-orange-500 hover:underline">
                Back to Home
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
