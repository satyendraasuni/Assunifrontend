import { useState } from 'react'
import Signupcomp from './components/signupcomponen';
import { Link } from 'react-router-dom';
import Otpcomponenet from './components/otpboxescomp';
import SideImage from './components/sideimage';


export function Loginpage() {
  const [isEmail, setIsEmail] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl">
         
        <SideImage></SideImage>

      
        <div className="md:w-1/2 p-8">
          
          <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>

          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => {
                setIsEmail(true);
                setShowOtp(false);
              }}
              className={`flex-1 py-2 rounded-md transition ${
                isEmail
                  ? "bg-blue-500 text-white shadow font-semibold"
                  : "bg-white text-gray-500"
              }`}
            >
              Email
            </button>

            <button
              onClick={() => {
                setIsEmail(false);
                setShowOtp(false);
              }}
              className={`flex-1 py-2 rounded-md transition ${
                !isEmail
                  ? "bg-blue-500 text-white shadow font-semibold"
                  : "bg-white text-gray-500"
              }`}
            >
              Phone
            </button>
          </div>

      
          {isEmail ? (
            <>
              <Signupcomp label="Email" type="email" />
              <Signupcomp label="Password" type="password" />

              <p className="text-sm text-blue-500 cursor-pointer mt-2">
                <Link to="/forgotpassword">Forgot password?</Link>
              </p>

              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </>
          ) : (
            <>
              <Signupcomp label="Phone Number" type="tel" />

              <button
                onClick={() => setShowOtp(true)}
                className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Send OTP
              </button>
            </>
          )}

         
          {showOtp && <Otpcomponenet />}

      
          <div className="my-6 text-center text-blue-500">
            <Link to="/signup">New User? Sign Up</Link>
          </div>

          <div className="my-4 text-center text-gray-400">
            or continue with
          </div>

          <div className="flex justify-between gap-2">
            <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100">
              Google
            </button>
            <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100">
              Twitter
            </button>
            <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100">
              Facebook
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By signing in, I agree to Terms & Conditions and Privacy Policy
          </p>

        </div>
      </div>
    </div>
  );
}