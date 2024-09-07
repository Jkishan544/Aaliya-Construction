import b2a from "../assets/images/b2a.jpg";
import b41 from "../assets/images/b41.jpg";
import school1 from "../assets/images/school1.jpg";
import b5 from "../assets/images/b5.jpg";
import {  NavLink } from "react-router-dom";
import { useEffect } from "react";
import React  from 'react';
import sushilbrochure from "../assets/images/sushilbrochure.pdf";
import gayatribrochure from "../assets/images/gayatribrochure.pdf";
import AnimateLeftRight from "../components/Animate/AnimateLeftRight";
import Heading from "../components/Heading";
 

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
 
      <div className="bg-slate-100 ">
        <section>
          <h1 className="mt-16 flex flex-wrap justify-center w-auto h-36 content-center lg:h-60 bg-slate-600 max-sm:text-xl text-6xl text-white font-bold font-serif font-barlow">Projects</h1>


          <div className="py-6 px-36 max-sm:px-8 max-sm:py-2">
            <div className="w-auto flex-wrap justify-center flex  py-16  ">
              <div className="w-auto mt-4  lg:w-1/2  ">
                <AnimateLeftRight direction='left' delay={0.2}  >
                  <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow 2xl:text-lg">Residential Properties</h1>
                  <Heading title="Neeta Residency" />
                </AnimateLeftRight>
                <AnimateLeftRight direction='left' delay={0.4}  >
                  <p className="mt-8 w-3/8 max-sm:text-xs text-base 2xl:text-xl ">Located at one of the prime locations in Ranchi, the Capital city of Jharkhand, Overlooking large green areas, Harmu River, and the city skyline.</p>
                </AnimateLeftRight>
                <div className="grid grid-rows-3  mt-10">
                  <AnimateLeftRight direction='left' delay={0.6}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined text-orange-500 ">
                      arrow_right
                    </span>3 BHK Homes with Luxury Amenities</p></AnimateLeftRight>
                  <AnimateLeftRight direction='left' delay={0.8}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>Excellent connectivity to airport and railway station</p></AnimateLeftRight>
                  <AnimateLeftRight direction='left' delay={1.0}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>CNT Project</p></AnimateLeftRight>
                </div>
                <AnimateLeftRight direction='left' delay={1.2}  >
                  <div className="mt-4">
                    <a href="https://youtu.be/2JDGX-Klgto?si=2MucpMlmvHKbuoo_" target="_blank" rel="noreferrer">
                      <span className=" text-xs lg:text-base py-3 px-3   bg-orange-600 text-white inline-flex items-center mt-4 lg:px-4  font-barlow  mr-4  hover:scale-105 hover:transition-transform">Project Walkthrough<span class="material-symbols-outlined ml-2">
                        videocam
                      </span></span></a>
                    <NavLink to="/neeta-residency">
                      <span className=" text-xs lg:text-base py-4 px-5 lg:py-3 bg-orange-600 text-white  inline-flex items-center mt-4 lg:px-4  font-barlow font-barlow  hover:scale-105 hover:transition-transform">View Project</span></NavLink>
                  </div>
                </AnimateLeftRight>
              </div>
              <div className="w-auto pl-32 mt-16 max-sm:pt-12 lg:w-1/2 max-sm:pl-8 ">
                <AnimateLeftRight direction='left' delay={1.4}  >
                  <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
                    <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b2a} alt="" />
                  </div>
                </AnimateLeftRight>
              </div>
            </div>



            <div className="w-auto flex-wrap justify-center flex  py-16 ">
              <div className="w-auto  pr-32 mt-12 lg:w-1/2 max-sm:pr-0 max-sm:pl-8 ">
                <AnimateLeftRight direction='right' delay={0.2}  >
                  <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
                    <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b41} alt="" />
                  </div>
                </AnimateLeftRight>
              </div>
              <div className="w-auto mt-4 max-sm:pt-12 lg:w-1/2 lg:mt-0 ">
                <AnimateLeftRight direction='Right' delay={0.4}  >
                  <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow font-barlow 2xl:text-lg">Residential Properties </h1>
                  <Heading title="Sushil Residency" />
                </AnimateLeftRight>
                <AnimateLeftRight direction='right' delay={0.6}  >
                  <p className="mt-8 max-sm:text-xs text-base 2xl:text-xl">Located at Singh More,  Hatia which provides the right mix of peace, business, and excellent connectivity and brings you the best of  both a fully modernized living and inspiringly beautiful place that rejuvenates you thoroughly and provides a pictures prefect living.  </p>
                </AnimateLeftRight>
                <div className="grid grid-rows-3  mt-4">
                  <AnimateLeftRight direction='right' delay={0.8}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>3 BHK Homes with Luxury Amenities</p></AnimateLeftRight>
                  <AnimateLeftRight direction='right' delay={1.0}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>Excellent connectivity to airport and railway station</p></AnimateLeftRight>
                  <AnimateLeftRight direction='right' delay={1.2}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>CNT Project</p></AnimateLeftRight>
                </div>
                <AnimateLeftRight direction='right' delay={1.4}  >
                  <div className="mt-4">
                    <a href="https://youtu.be/NV7RsjKzidQ?si=hcbSQvLpgd3TdPPL" target="_blank" rel="noreferrer">
                      <span className="text-xs lg:text-base py-3 px-3   bg-orange-600 text-white lg:py-3 inline-flex items-center mt-4 lg:px-4  font-barlow  mr-4   hover:scale-105 hover:transition-transform">Project Walkthrough<span class="material-symbols-outlined ml-2">
                        videocam
                      </span></span></a>
                    <a href={sushilbrochure} target="_blank" rel="noreferrer">
                      <span className="text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3 inline-flex items-center mt-4 lg:px-4   font-barlow  mr-2  hover:scale-105 hover:transition-transform">Download Brochure<span class="material-symbols-outlined ml-2">
                        download
                      </span></span></a>
                  </div>
                </AnimateLeftRight>
              </div>
            </div>



            <div className="w-auto flex-wrap justify-center flex py-16 ">
              <div className="w-auto  lg:w-1/2 lg:mt-12 ">
                <AnimateLeftRight direction='left' delay={0.2}  >
                  <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow 2xl:text-lg">School Project </h1>
                  <Heading title="Holy Family School" />
                </AnimateLeftRight>
                <AnimateLeftRight direction='left' delay={0.4}  >
                  <p className="mt-8  max-sm:text-xs text-base 2xl:text-xl">The Holy Family School is located in Kurdeg, Simdega. The school is built in area of 65,000 Sq. Ft. Constructed as per School Building Bye Laws.</p>
                </AnimateLeftRight>
                <div className="grid grid-rows-3  mt-4">
                  <AnimateLeftRight direction='left' delay={0.6}  >
                    <p className="text-sm lg:text-lg font-barlow flex items-center  2xl:text-2xl"><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>Located in Kurdeg Simdega</p></AnimateLeftRight>
                  <AnimateLeftRight direction='left' delay={0.8}  >
                    <p className="text-sm lg:text-lg font-barlow flex  items-center  2xl:text-2xl"><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>65,000 Sq. Ft. Area with G+2 floors</p></AnimateLeftRight>
                  <AnimateLeftRight direction='left' delay={1.0}  >
                    <p className="text-sm lg:text-lg font-barlow flex items-center  2xl:text-2xl"><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>As Per School Building Bye Laws</p></AnimateLeftRight>
                </div>
              </div>
              <div className="w-auto pl-32 mt-20 max-sm:pt-12 lg:w-1/2 max-sm:pl-8 ">
                <AnimateLeftRight direction='left' delay={1.4}  >
                  <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
                    <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={school1} alt="" />
                  </div>
                </AnimateLeftRight>
              </div>
            </div>




            <div className="w-auto flex-wrap justify-center flex py-16 ">
              <div className="w-auto  pr-32 mt-12   lg:w-1/2  max-sm:pr-0 max-sm:pl-8">
                <AnimateLeftRight direction='right' delay={0.2}  >
                  <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
                    <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b5} alt="" />
                  </div>
                </AnimateLeftRight>
              </div>
              <div className="w-auto my-4 max-sm:pt-12 lg:w-1/2 lg:mt-0">
                <AnimateLeftRight direction='Right' delay={0.4}  >
                  <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow 2xl:text-lg">Residential Properties </h1>
                  <Heading title="Gayatri Enclave" />
                </AnimateLeftRight>
                <AnimateLeftRight direction='right' delay={0.6}  >
                  <p className="mt-8  max-sm:text-xs text-base 2xl:text-xl">The Enclave is more than a contemporary residential
                    development. It’s a lifestyle experience that offers you
                    just about everything. A generous mix of spacious
                    apartments and outdoor spaces, The Enclave has been
                    designed for luxurious family life</p>
                </AnimateLeftRight>
                <div className="grid grid-rows-3  mt-4">
                  <AnimateLeftRight direction='right' delay={0.8}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>Located in Hatiya, Ranchi</p></AnimateLeftRight>
                  <AnimateLeftRight direction='right' delay={1.0}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                    </span>3 BHK homes with Luxury Amenities</p></AnimateLeftRight>
                  <AnimateLeftRight direction='right' delay={1.2}  >
                    <p className="text-sm lg:text-lg font-barlow flex 2xl:text-2xl items-center "><span className="material-symbols-outlined  text-orange-500">
                      arrow_right
                   </span>Open For Booking</p></AnimateLeftRight>
                </div>
                <AnimateLeftRight direction='right' delay={1.4}  >
                  <div className="mt-4">
                    <a href={gayatribrochure} target="_blank" rel="noreferrer">
                      <span className="text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3 inline-flex items-center mt-4 lg:px-4  font-barlow  mr-2  hover:scale-105 hover:transition-transform">Download Brochure <span class="material-symbols-outlined ml-2">
                        download
                      </span></span></a>
                  </div>
                </AnimateLeftRight>
              </div>
            </div>
          </div>
        </section>
      </div>
   );
}

export default Projects;