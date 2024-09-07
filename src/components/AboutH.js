import React from "react";
import { NavLink } from "react-router-dom";
import a1a from "../assets/images/a1a.jpg";
import a2a from "../assets/images/a2a.jpg";
import Heading from "./Heading";
import AnimateLeftRight from "./Animate/AnimateLeftRight";
 
export const AboutH = () => {
  return (

    <div className="py-6 px-36 max-sm:px-8 max-sm:py-2 ">

      <div className="  flex-wrap w-auto justify-center flex py-12">


        <div className="w-auto lg:w-1/2   ">
          <AnimateLeftRight direction='left' delay={0.2}  >
            <Heading title="About Us" />
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.4}  >
            <p className="max-sm:text-xs lg:text-base 2xl:text-xl mt-6 w-auto">
              <span className="font-bold font-serif font-barlow">Aaliya Construction</span> is a proprietary firm owned and run by <span className="font-bold font-serif font-barlow">Mr. Shailesh Sudhanshu Topno</span>, engaged in Real-Estate Development since 2013. Since its inception the firm has earned a respect and credence among the customers  / clients and the financial institutions as well.</p>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.6}  >
            <p className="max-sm:text-xs lg:text-base 2xl:text-xl mt-4 w-auto ">Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.</p>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.8}  >
            <p className="max-sm:text-xs lg:text-base 2xl:text-xl mt-4 w-auto "> Aaliya Construction is always ready to take up any challenging task and deliver the best possible results. We always try to work as a team to achieve the desired results.</p>
            <hr className="  mt-10 -border-t-96 " /></AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={1.0}  >
            <div>
              <NavLink to="/about" className="mt-2 bg-orange-600 text-white  inline-flex items-center  px-4 py-2 lg:px-6 lg:py-4 lg:mt-6 rounded-sm 2xl:text-xl  hover:scale-105 hover:transition-transform">
                <p className=" font-barlow">More</p><span className="material-symbols-outlined ">arrow_forward</span> </NavLink>
            </div>
          </AnimateLeftRight>
        </div>
        <div className="mt-16 lg:w-1/2 px-16 max-sm:px-8 max-sm:pt-12">
          <AnimateLeftRight direction='Right' delay={0.2}  >

            <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-8 max-sm:-mr-8 -mr-8 ">
              <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={a1a} alt="" />
            </div>
          </AnimateLeftRight>

        </div>

      </div>

      <div>
        <div className="flex-wrap w-auto justify-center flex py-16">
          <div className="mt-16 lg:w-1/2 px-16 max-sm:px-8">
            <AnimateLeftRight direction='left' delay={0.2}  >

              <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-8 max-sm:-mr-8 -ml-8 max-sm:-ml-0">
                <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={a2a} alt="" />
              </div>
            </AnimateLeftRight>

          </div>


          <div className=" w-auto lg:w-1/2 mt-12">
            <AnimateLeftRight direction='Right' delay={0.2}  >

              <Heading title="How we Work" />


              <div className="grid grid-cols-2 gap-4 mt-8 lg:gap-8 ">
                <div className=" ">
                  <AnimateLeftRight direction='right' delay={0.4}  >
                    <h1 className="max-sm:text-xs lg:text-xl 2xl:text-2xl"><b className="font-bold font-serif font-barlow">We Care</b> </h1>
                    <p className="max-sm:text-xs lg:text-base 2xl:text-xl max-sm:w-full w-1/2 lg:w-auto">We respect each other and we do things safely and sustainably for better tomorrow.</p>
                  </AnimateLeftRight>
                </div>
                <div className="">
                  <AnimateLeftRight direction='right' delay={0.6}  >
                    <h1 className="max-sm:text-xs lg:text-xl 2xl:text-2xl"><b className="font-bold font-serif font-barlow">We Improve</b> </h1>
                    <p className="max-sm:text-xs lg:text-base 2xl:text-xl max-sm:w-full w-1/2 lg:w-auto">We listen, learn and adapt our ideas and experience into better solutions and service for our customers.</p>
                  </AnimateLeftRight>
                </div>
                <div className=" ">
                  <AnimateLeftRight direction='right' delay={0.8}  >
                    <h1 className="max-sm:text-xs lg:text-xl 2xl:text-2xl"><b className="font-bold font-serif font-barlow">We Achieve Together</b> </h1>
                    <p className="max-sm:text-xs lg:text-base 2xl:text-xl max-sm:w-full w-1/2 lg:w-auto">We value the contribution of each individual and we work together to build strong, open and trusting partnerships.</p>
                  </AnimateLeftRight>
                </div>
                <div className="">
                  <AnimateLeftRight direction='right' delay={1.0}  >
                    <h1 className=" max-sm:text-xs lg:text-xl 2xl:text-2xl"><b className="font-bold font-serif font-barlow">We Deliver</b> </h1>
                    <p className="max-sm:text-xs lg:text-base 2xl:text-xl max-sm:w-full w-1/2 lg:w-auto">We set ourselves stretching goals, taking pride in doing a great job and helping our customers and partners to succeed.</p>
                  </AnimateLeftRight>
                </div>

              </div>
            </AnimateLeftRight>

          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutH;
