import React from "react";
import eg from "../assets/images/eg.jpg";
import vorcos from "../assets/images/vorcos.png";
import media from "../assets/images/media.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import Heading from "./Heading";
import AnimateLeftRight from "./Animate/AnimateLeftRight";
import AnimateUpDown from "./Animate/AnimateUpdown";

export const OurAssociates = () => {
  return (

    <div className=" py-6 px-36 max-sm:px-8 max-sm:py-2">
      <div className="   max-sm:text-lg text-4xl">
        <AnimateLeftRight direction='left' delay={0.2}  >
          <Heading title="Our Associates" />
        </AnimateLeftRight>
        <AnimateLeftRight direction='left' delay={0.4}  >
          <p className="  w-auto text-xs mt-6 lg:w-3/4 xl:w-2/5 lg:text-base 2xl:text-xl">Today with the cooperation and constant support of our partner we  are building legacy that will stand the test of time. We desire to achieve long term win-win benefits. Through our expertise and quality, we are dedicated in creating brighter and affordable living for everyone. </p>
        </AnimateLeftRight>
      </div>
      <AnimateUpDown direction='down'>


        <div className="  grid grid-cols-1 gap-2 py-10 px-10 pt-8 pb-8 xl:grid-cols-3 xl:gap-3 content-center lg:px-64 xl:px-8">
          <div className=" text-center bg-white px-12 py-12 pt-0 pb-0 hover:shadow-lg hover:scale-105 hover:transition-transform">
            <img src={eg} alt="eg" className="mx-auto " />
            <h1 className="  max-sm:text-base lg:text-xl 2xl:text-2xl font-bold font-serif font-barlow  ">Our Architect</h1>
            <p className="max-sm:text-xs text-base 2xl:text-lg xl:text-sm">Mr. Shailesh Verma, Shop No.-6, Arctic Mall, Bariatu Road, Ranchi</p>
            <div className="w-auto flex flex-wrap justify-center   mt-4 mb-4 ">
              <a href="https://www.facebook.com/engineersgroupranchi" className="  hover:scale-110 hover:transition-transform" target="_blank" rel="noreferrer">
                <img src={facebook} className="  h-8 w-6  xl:h-10 xl:w-10 -mt-1 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 hover:fill-orange-500" alt="facebook logo"/></a >
            </div>

          </div>
          <div className="bg-white text-center px-12 py-12  pt-0 pb-0 hover:shadow-lg hover:scale-105 hover:transition-transform lg:-mt-3 2xl:lg:-mt-0 ">
            <img src={vorcos} alt="vorcos" className="mx-auto  " />
            <h1 className="max-sm:text-base lg:text-xl 2xl:text-2xl font-bold font-serif font-barlow ">Our Interiors</h1>
            <p className="max-sm:text-xs text-base 2xl:text-lg xl:text-sm">Mrs. Shifa Dayal Kujur, 5/470, Viram Khand, Gomti Nagar, Lucknow 226010, Uttar Pradesh</p>
            <div className="flex flex-wrap justify-center mt-4 mb-4  gap-4">
              <a href="https://www.facebook.com/www.edengreen.in" className="  hover:scale-110 hover:transition-transform" target="_blank" rel="noreferrer">
                <img src={facebook} className="  h-8 w-6  xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 -mt-1	lg:h-10 lg:w-10" alt="facebook logo"/></a >
              <a href="https://www.instagram.com/edengreentechnologies/" className="  hover:scale-110 hover:transition-transform" target="_blank" rel="noreferrer">
                <img src={instagram} className="  h-6 w-6	 xl:h-8 xl:w-8 lg:h-10 lg:w-8 lg:-mt-1 xl:-mt-0 2xl:h-10 2xl:w-10" alt="instagram logo" /></a >
            </div>
          </div>

          <div className="bg-white text-center   px-12 py-12 pt-0 pb-0 hover:shadow-lg hover:scale-105 hover:transition-transform">
            <img src={media} alt="media" className="mx-auto " />
            <h1 className="max-sm:text-base lg:text-xl 2xl:text-2xl font-bold font-serif font-barlow">Marketing And Communication</h1>
            <p className="max-sm:text-xs text-base 2xl:text-lg xl:text-sm">Sahu Chowk, Pundag,<br /> Ranchi, Jharkhand</p>
            <div className="flex flex-wrap justify-center mt-4 mb-4 gap-4">
              <a href="https://www.facebook.com/engineersgroupranchi" className="  hover:scale-110 hover:transition-transform" target="_blank" rel="noreferrer">
                <img src={facebook} className="  h-8 w-6  	 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12   -mt-1 lg:h-10 lg:w-10" alt="facebook logo"/></a >
              <a href="https://www.instagram.com/mediaexpressranchi/ " className="  hover:scale-110 hover:transition-transform" target="_blank" rel="noreferrer">
                <img src={instagram} className="  h-6 w-6   xl:h-8 xl:w-8 lg:h-10 lg:w-8 lg:-mt-1 xl:-mt-0 2xl:h-10 2xl:w-10" alt="instagram logo"/></a >
            </div>
          </div>
        </div>
      </AnimateUpDown>
    </div>

  );
}
export default OurAssociates;
