import MainFooter from "./components/MainFooter";
import MainpageheaderComp from "./components/Mainpageheaderccomp";
import { SquarePen } from "lucide-react";
import { Link } from "react-router-dom";



export default function Postpage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">

     
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-40">

    
        <div className="flex gap-3">
          <MainpageheaderComp text="All" active />
          <MainpageheaderComp text="Active" />
          <MainpageheaderComp text="Solved" />
        </div>

   
      <Link to="/Addpostpage">  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
        <SquarePen size={18} />
      
        </button>
        </Link>
      </div>


      <div className="p-4 text-gray-600">
        <p>Your posts will appear here...</p>
      </div>

     
      <MainFooter />
    </div>
  );
}