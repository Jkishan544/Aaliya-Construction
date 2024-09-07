import b5 from "../assets/images/b5.jpg";
import React from "react";
import Heading from "./Heading";
import AnimateLeftRight from "./Animate/AnimateLeftRight";


export const OurStory = () => {
  return (





    <div className="   py-6 px-36 max-sm:px-8 max-sm:py-2  ">
      <div className="  flex-wrap w-auto justify-center flex py-8">


        <div className="mt-24 lg:w-1/2 px-16 max-sm:px-8">
          <AnimateLeftRight direction='left' delay={0.2}  >

            <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-8 max-sm:-mr-8 -ml-8 max-sm:-ml-0">
              <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={b5} alt="" />
            </div>
          </AnimateLeftRight>

        </div>
        <div className="w-auto lg:w-1/2 max-sm:py-12">
          <AnimateLeftRight direction='Right' delay={0.2}  >

            <Heading title="Our Story" />
          </AnimateLeftRight>
          <AnimateLeftRight direction='right' delay={0.4}  >
            <p className="max-sm:text-xs lg:text-base 2xl:text-xl mt-4 w-auto  ">Aaliya Construction is a proprietary firm owned and run by Mr. Shailesh Sudhanshu Topno, engaged in Real-Estate Development since 2013, having its office at Bando Haat, Hawai Nagar, Road No. 0, Ranchi. Since its inception the firm has earned a respect and credence among the customers/ clients and the financial institutions as well.. Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.<br />
              We build Residential Apartment / Residential Bungalow / School Building and Residential Building for Society Mentors</p>
          </AnimateLeftRight>
          <AnimateLeftRight direction='right' delay={0.6}  >
            <div className="  grid grid-cols-1 gap-2  mt-10 lg:grid-cols-2 lg:text-lg">
              <p className="flex font-bold font-serif font-barlow 2xl:text-2xl   items-center "><span className="material-symbols-outlined mr-2">
                check_circle
              </span>Professional Specialist</p>
              <p className="flex font-bold font-serif font-barlow 2xl:text-2xl items-center "><span className="material-symbols-outlined  mr-2">
                check_circle
              </span>Brilliant Ideas</p>
              <p className="flex font-bold font-serif font-barlow 2xl:text-2xl items-center "><span className="material-symbols-outlined  mr-2">
                check_circle
              </span>Precise Builders</p>
              <p className="flex font-bold font-serif font-barlow 2xl:text-2xl items-center "><span className="material-symbols-outlined  mr-2">
                check_circle
              </span>24/7 Assiatance</p>

            </div>
          </AnimateLeftRight>

        </div>
      </div>
    </div>
  );
}
export default OurStory;
