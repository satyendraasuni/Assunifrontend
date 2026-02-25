
import Signupcomp from "./components/signupcomponen";
import SideImage from "./components/sideimage";


export function SetPassword(){

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-200 from-blue-100 to-blue-200">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl">
         
         <SideImage></SideImage>

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Set Password
          </h2>
          <Signupcomp label="New Password" type="text"  />
          <Signupcomp label="Enter Confirm Password" type="password"  />
          <button
         
           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Continue
          </button>

         

          </div>
          </div>
          </div>
        </>
    );
}