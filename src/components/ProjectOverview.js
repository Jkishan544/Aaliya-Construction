import { NavLink } from "react-router-dom";
import school1 from "../assets/images/school1.jpg";
import b41 from "../assets/images/b41.jpg";
import sushil from "../assets/images/sushil.jpg";
import b2a from "../assets/images/b2a.jpg";
import React from "react";
import Heading from "./Heading";
import AnimateLeftRight from "./Animate/AnimateLeftRight";


export const ProjectOverview = () => {

  return (

    <div className="mt-4 py-6 px-36 max-sm:px-8 max-sm:py-2" >
      <div className="w-auto max-sm:text-lg text-4xl  ">
        <AnimateLeftRight direction='left' delay={0.2}  >

          <Heading title="Our Projects" />
        </AnimateLeftRight>
        <AnimateLeftRight direction='Right' delay={0.2}  >

          <div  >
            <NavLink to="/projects" className=" float-right font-barlow mt-4 mb-4 bg-orange-600 text-white  flex items-center  py-2 px-4 lg:my-2 lg:py-4 lg:px-4 lg:text-base rounded-sm 2xl:text-2xl hover:scale-105 hover:transition-transform" >
              View All Projects <span className="material-symbols-outlined">arrow_forward</span></NavLink>
          </div>
        </AnimateLeftRight>
        <AnimateLeftRight direction='left' delay={0.2}  >

          <div className="w-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-10  mt-20 py-8 ">

            <div className=" w-auto relative group  lg:w-auto overflow-hidden ">
              <img className="  object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all " src={b2a} alt="" />
              <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center  ">
                <h1 className=" text-white font-barlow font-bold 2xl:text-6xl">Neeta Residency</h1>
                <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all 2xl:text-xl">HARMU RANCHI</p>
              </div>
            </div>

            <div className="w-auto  relative group lg:w-auto overflow-hidden max-sm:mt-16">
              <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={school1} alt="" />
              <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
                <h1 className="  text-white font-barlow font-bold 2xl:text-6xl">Holy Family School</h1>
                <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all 2xl:text-xl">KURDEG SIMDEGA</p>
              </div>
            </div>
          </div>
        </AnimateLeftRight>
        <AnimateLeftRight direction='Right' delay={0.2}  >

          <div className="w-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-10 py-8 ">


            <div className="w-auto relative group lg:w-auto overflow-hidden">
              <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={b41} alt="" />
              <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
                <h1 className="  text-white font-barlow font-bold  2xl:text-6xl ">Gayatri Residency</h1>
                <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all 2xl:text-xl">HATIA RANCHI</p>
              </div>
            </div>

            <div className="w-auto relative group lg:w-auto overflow-hidden max-sm:mt-16">
              <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={sushil} alt="" />
              <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
                <h1 className="  text-white font-barlow font-bold 2xl:text-6xl">Sushil Residency</h1>
                <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all 2xl:text-xl">SINGH MORE HATIA</p>
              </div>
            </div>
          </div>
        </AnimateLeftRight>

      </div>

    </div>


  );
}
export default ProjectOverview;
