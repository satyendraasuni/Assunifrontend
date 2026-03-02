import Signupcomp from "./components/signupcomponen";

import { useState } from "react";



export default function AddPostpage() {
  const [hideName, setHideName] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        
        <h1 className="text-2xl font-bold text-gray-800">Create New Post</h1>
        <p className="text-gray-500 mb-6">Report a new issue</p>

       
        <Signupcomp label="Title *" type="text" />

   
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            rows="4"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Describe your issue..."
          ></textarea>
        </div>

      
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>

   
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attach Media
          </label>

          <label className="flex items-center justify-center gap-2 border-2  rounded-lg py-4 cursor-pointer hover:bg-gray-50 transition">
            Upload Image / Video
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Hide Username Toggle */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-gray-700">Hide my username</p>

          <button
            onClick={() => setHideName(!hideName)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              hideName ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                hideName ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

      
        <button className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-xl shadow-md hover:bg-blue-600 transition">
     
         Post
        </button>
      </div>
    </div>
  );
}