import SideImage from "./components/sideimage";
import Signupcomp from "./components/signupcomponen";
import  logo from "./images/assunilogo.png";



export default function Signuppage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      
     <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl">
         
     <SideImage></SideImage>
     
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          <Signupcomp label="Name" type="text" />
          <Signupcomp label="Password" type="password" />
          <Signupcomp label="Email" type="email" />
          <Signupcomp label="Contact Number" type="number" />
          <Signupcomp label="Date of Birth" type="date" />

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Gender
            </label>
            <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}