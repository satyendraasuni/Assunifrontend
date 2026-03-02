import { Home, User, PlusSquare } from "lucide-react";

export default function MainFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] border-t z-50">
      <div className="max-w-md mx-auto flex justify-between items-center px-6 py-3 relative">

        
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 transition">
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </button>

       
        <button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition">
          <PlusSquare size={26} />
        </button>

       
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 transition">
          <User size={22} />
          <span className="text-xs mt-1">Account</span>
        </button>

      </div>
    </div>
  );
}