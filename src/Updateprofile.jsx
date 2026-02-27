import Signupcomp from "./components/signupcomponen";
import { useState } from "react";

export default function UpdateProfile() {
  const [gender, setGender] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 from-blue-100 via-purple-100 to-pink-100 p-6">
      
     
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Update Your Profile
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill out this form for better assistance
        </p>

      
        <div className="space-y-4">

          <Signupcomp label="Name *" type="text" />
          <Signupcomp label="Phone No *" type="number" />
          <Signupcomp label="Email *" type="email" />
          <Signupcomp label="DOB *" type="date" />

    
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">
              Gender *
            </p>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Signupcomp label="Document (Aadhar Card) *" type="file" />

       
          <button
            className="w-full bg-blue-500 from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Update Profile
          </button>

        </div>
      </div>
      </div>
  
  );
}