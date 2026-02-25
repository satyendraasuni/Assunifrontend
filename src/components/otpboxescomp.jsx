export default function Otpcomponenet() {
    return (
      
      
          
          <>
        
  
          {/* OTP Inputs */}
          <div className="flex justify-between mt-6">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-lg font-semibold text-center border border-gray-300 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                transition duration-200"
              />
            ))}
          </div>
  
         
          <button className="w-full mt-6 bg-blue-500 from-purple-600 to-indigo-600 
          text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition duration-200 shadow-md">
            Verify OTP
          </button>
  
         
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Didn't receive the code?
            </p>
            <button className="text-blue-600 font-medium hover:underline mt-1">
              Resend Code
            </button>
          </div>
  
          </>
 
    );
  }