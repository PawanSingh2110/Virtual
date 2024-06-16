import logo from "../assets/logo.png";
import { Menu,X } from "lucide";
import { useState } from "react";
const NavBar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen]=useState(false);
    const toggle =()=>{
        setmobileDrawerOpen(!mobileDrawerOpen);
    };



  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
       <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
               <img  className='h-10 w-10 mr-2 'src={logo} alt="logo"/> 
               <span className="text-xl tracking-tighter">VirtualR</span>
            </div>
            <div className="hidden lg:flex ml-14 space-x-12">
                <a href="#"className="cursor-pointer">Features</a>
                <a href="#"className="cursor-pointer">Workflow</a>
                <a href="#"className="cursor-pointer">Pricing</a>
                <a href="#"className="cursor-pointer">testimonials</a>
            </div>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="px-3 py-2 border rounded-md">Sign up</a>
                <a href="#" className=" bg-gradient-to-r from-orange-500 to-yellow-400  px-3 py-2 border rounded-md">Create Account</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggle}>
                </button>

            </div>

          </div>
       </div>
    </nav>
  )
}

export default NavBar
