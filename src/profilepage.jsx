import Signupcomp from "./components/signupcomponen";
import { LogOut, Trash2 } from "lucide-react";

export default function Profilepage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>

<<<<<<< HEAD
  
=======
       
>>>>>>> 1d636d4853f9954e158e95874cc70c01ae388a44
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
            Image
          </div>
          <button className="mt-2 text-blue-600 text-sm">
            Change Photo
          </button>
        </div>

<<<<<<< HEAD
      
=======
   
>>>>>>> 1d636d4853f9954e158e95874cc70c01ae388a44
        <div className="flex flex-col gap-4">
          <Signupcomp label="Name *" type="text" />
          <Signupcomp label="Phone No *" type="text" />
          <Signupcomp label="Email *" type="email" />
          <Signupcomp label="DOB *" type="date" />

          <select className="border p-2 rounded-lg">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <Signupcomp label="Document (Aadhar Card) *" type="text" />

         
          <div className="flex justify-around mt-2">

<<<<<<< HEAD
           
=======

>>>>>>> 1d636d4853f9954e158e95874cc70c01ae388a44
            <button className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600">
              <LogOut size={18} />
              Logout
            </button>

<<<<<<< HEAD
           
=======
   
>>>>>>> 1d636d4853f9954e158e95874cc70c01ae388a44
            <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">
              <Trash2 size={18} />
              Delete
            </button>

          </div>

<<<<<<< HEAD
  
=======
     
>>>>>>> 1d636d4853f9954e158e95874cc70c01ae388a44
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-2">
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}
