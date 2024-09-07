import Logo1 from "../assets/logo1.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

export const Header = () => {
   const [isOpen, SetIsOpen] = useState(false);

   const toggleMenu = () => {
      SetIsOpen((open) => !open)
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   
   return (

      <Headroom className="Headroom z-10">

         <div className="flex flex-row justify-between items-center px-28 py-4 max-sm:px-4 bg-white">
            <div className="">
               <a href="/">
                  <img src={Logo1} className="max-sm:w-32"/>
               </a>
            </div>
            <div className="bar1 " onClick={toggleMenu}>
               <span className="material-symbols-outlined  text-orange-500 ">
                  {isOpen ? "close" : "menu"}
               </span>

            </div>


            <div className={`bar2 ${isOpen ? "is-Open" : ""}`}>

               <nav className="max-sm:my-4 mr-8 ver" onClick={toggleMenu}>
                  <NavLink to="/" className={({ isActive }) =>
                     "font-normal h-10 w-8 ml-8 hover:text-orange-500 2xl:text-xl" + (isActive ? " text-orange-500" : "")} aria-current="page" >Home</NavLink>
                  <NavLink to="/about" className={({ isActive }) =>
                     "font-normal h-10 w-8 ml-8 hover:text-orange-500 2xl:text-xl" + (isActive ? " text-orange-500" : "")} aria-current="page">About</NavLink>
                  <NavLink to="/projects" className={({ isActive }) =>
                     "font-normal h-10 w-8 ml-8 hover:text-orange-500 2xl:text-xl" + (isActive ? " text-orange-500" : "")} aria-current="page">Projects</NavLink>
                  <NavLink to="/contact-us" className={({ isActive }) =>
                     "font-normal h-10 w-8 ml-8 hover:text-orange-500 2xl:text-xl" + (isActive ? " text-orange-500" : "")} aria-current="page">ContactUs</NavLink>

               </nav></div>


         </div>
      </Headroom>
   )
}
