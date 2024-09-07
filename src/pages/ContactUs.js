import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import { useEffect } from "react";
import React from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import AnimateLeftRight from "../components/Animate/AnimateLeftRight";


 const ContactUs = () => {

  useEffect(() => { 
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-slate-100">
      <section>
        <p className="mt-16 w-auto h-36  flex flex-wrap justify-center content-center lg:h-60 bg-slate-600"><b className="max-sm:text-xl text-6xl text-white font-bold font-serif font-barlow">Contact Us</b>
        </p>

        <div>
          <div className="w-auto py-20 px-36 max-sm:px-8 max-sm:py-2">
            <Heading title="Get In Touch" />

            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-2 mt-12 lg:grid-cols-1 lg:gap-2  ">
              <AnimateLeftRight direction='left' delay={0.2}  >
                <div className="  bg-white max-sm:text-xs text-lg py-8  ">
                  <h1 className=" max-sm:text-2xl text-4xl font-bold font-serif font-barlow  px-4">Send Us A Message</h1>

                  <Form />

                </div>
              </AnimateLeftRight>
              <AnimateLeftRight direction='Right' delay={0.2}  >
                <div className=" bg-white px-6 py-4 max-sm:px-4">
                  <div className="max-sm:text-xs text-lg py-4 ">
                  <h1 className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow ">Contact Info</h1>
                  <div className="  grid grid-cols-1 gap-2 lg:grid-cols-2 py-6 max-sm:py-4">

                    <div className="py-4 px-4"><h1 className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow 2xl:text-3xl"><span class="material-symbols-outlined  text-orange-600 mr-2 ">
                      call
                    </span>Call us</h1>
                      <p className="2xl:text-xl">+91 6205599190 <br />
                        +91 6205408020</p>
                    </div>
                    <div className="py-4 px-4 "><h1 className=" flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow 2xl:text-3xl"><span class="material-symbols-outlined  text-orange-600 mr-2">
                      location_on
                    </span>Our Location</h1>
                      <p className="2xl:text-xl">Singh More, Hatia, Ranchi Jharkhand</p>
                    </div>
                    <div className="py-4 px-4 "><h1 className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow 2xl:text-3xl">
                      <span className="material-symbols-outlined  text-orange-600 mr-2">
                        mail
                      </span>Our Email</h1>
                      <p className="2xl:text-xl">aaliyaconstruction2013@gmail.com
                      </p>
                    </div>
                  </div>
                  <p className="max-sm:text-2xl text-4xl font-bold font-serif font-bpld font-barlow pt-6 max-sm:pt-0">Follow Us</p><br />
                  <div className="flex flex-wrap gap-3 px-4 lg:px-10 2xl:pb-28 lg:pb-20 max-sm:pb-0">

                    <a href="https://www.facebook.com/AaliyaConstructionRanchi" className="" target="_blank" rel="noreferrer">
                      <img src={facebook} className=" h-10 w-8 lg:h-10 lg:w-10  -mt-1 text-white 2xl:h-12 2xl:w-12  hover:scale-110 hover:transition-transform" alt="facebook logo" /></a >
                    <a href="https://www.instagram.com/aaliyaconstruction/" target="_blank" rel="noreferrer">
                      <img src={instagram} className="  h-8 w-8 lg:h-8 lg:w-8  text-white	 2xl:h-10 2xl:w-10  hover:scale-110 hover:transition-transform" alt="instagram logo"/></a >
                  </div>
                  </div>
                </div>
              </AnimateLeftRight>
            </div>

          </div>
        </div>
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.914296988072!2d85.3129384!3d23.318868099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1783810af99%3A0xb25d2b260a43c485!2sAaliya%20Construction!5e0!3m2!1sen!2sin!4v1719316681481!5m2!1sen!2sin" title="Aaliya map location" height="450" style={{ border: 0, width: '100%' }} AllowFullScreen="" loading="lazy" ReferrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
}


export default ContactUs;

