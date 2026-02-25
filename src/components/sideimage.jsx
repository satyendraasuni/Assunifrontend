import  logo from "../images/assunilogo.png";
export default function SideImage(){
    return (
        <>
        <div
          className="md:w-1/2 h-64 md:h-auto bg-contain  bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        </>
    );
}