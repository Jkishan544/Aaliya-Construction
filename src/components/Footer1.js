import React from 'react'
import logo from "../assets/logo-white.png";
import pranami from '../assets/Pranami.png';
import { ReactComponent as FacebookLogo } from '../assets/facebook.svg';
import { ReactComponent as LinkedinLogo } from '../assets/linkedin.svg';
import { ReactComponent as TwitterLogo } from '../assets/twitter.svg';
import { useState } from 'react';

export const Footer1 = () => {


  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  const toggleMenu = async () => {
    await setIsOpen(!isOpen);
    handleOpen();
  }


  return (
    <div className='bg-gray-100'>
      <div className="w-full 2xl:px-36 py-4 md:px-4 bg-gray-100 max-sm:px-4 max-sm:py-2" id="footerTop">
        <div className="w-full flex justify-between border-b items-center py-4  ">
          <h3 className="text-3xl font-bold font-serif font-barlow max-sm:text-xl  ">Other Important Links</h3>
          <div className='grid grid-cols-3 gap-3'>
            <a href="https://www.facebook.com/PranamiGroup/" target="_blank" rel="noreferrer" className="  hover:text-teal-500 inline-block  w-9 max-sm:w-6"><FacebookLogo /> </a>
            <a href="https://twitter.com/PranamiGroup" target="_blank" rel="noreferrer" className=" hover:text-teal-500 inline-block  w-9 max-sm:w-6"><TwitterLogo /> </a>
            <a href="https://www.linkedin.com/in/pranami-group-909b9870" rel="noreferrer" target="_blank" className=" hover:text-teal-500 inline-block  w-9 max-sm:w-6"><LinkedinLogo /> </a>

          </div>

        </div>
        <ul className="grid grid-cols-4  text-center text-2xl  font-serif font-barlow py-4 max-sm:text-xl lg:tracking-widest ">
          <li className=" w-auto">
            <a className="py-2 hover:font-bold" href="">Business Enquiry</a>
          </li>
          <li className=" w-auto">
            <a className="py-2 hover:font-bold" href="">Media</a>
          </li>
          <li className=" :w-auto">
            <a className="py-2 hover:font-bold" href="">Careers</a>
          </li>
          <li className=" w-auto ">
            <a className="py-2 hover:font-bold" href="/contact-us">Contact</a>
          </li>
        </ul>
      </div>


      <div className={' w-full h-auto bg-black opacity-95  '}   >
        <div >
          <h1 onClick={toggleMenu} className='text-white text-lg 2xl:pl-32  lg:pl-12 py-2 cursor-pointer flex items-center  max-sm:text-sm '><span className="material-symbols-outlined"  > {isOpen ? "unfold_less" : "unfold_more"} </span> SITE MAP</h1>
        </div>
        <div className={`overflow-hidden relative + ${isOpen ? `max-h-full ` : 'max-h-0'}`} style={{ backgroundImage: `url(${pranami})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right ' }}>
          <hr className='2xl:mx-48 lg:mx-24 max-sm:mx-4 md:mx-12' />
          <div className=" 2xl:ml-48 lg:ml-24 my-2 max-sm:ml-4 md:ml-12">
            <img id="logo" className="h-16 lg:h-16" src={logo} alt="Logo" />
            <div className="lg:hidden float-right -mt-14 mr-4">
              <h6 className="text-white text-base font-normal uppercase font-abhaya">Pranami Group</h6>
              <h6 className="text-white text-base">+91-77598-11111</h6>
            </div>
          </div>


          <hr className='2xl:mx-48 lg:mx-24 max-sm:mx-4 md:mx-12' />
          <div className='grid grid-cols-4 2xl:gap-60 2xl:px-48 lg:gap-36 lg:ml-12 2xl:ml-0 md:px-12  py-2 max-sm:px-2 max-sm:grid-cols-2 max-sm:gap-4 max-sm:text-center  '>
            <div className=''>
              <h1 className='text-slate-400 text-lg hover:text-white cursor-default max-sm:text-base max-sm:font-bold'>ABOUT US</h1>
              <p className='max-sm:text-sm text-base text-white  grid gap-1 py-2 '  >
                <a href=''>Who We Are</a>
                <a href=''>Chairman's Message</a>
                <a href=''>Leadership</a>
                <a href=' '>Our Foundation</a>
              </p>
            </div>

            <div className=''>
              <h1 className='text-slate-400 text-lg hover:text-white cursor-default max-sm:text-base max-sm:font-bold'>OUR PROJECTS</h1>
              <p className='max-sm:text-sm text-base text-white  grid gap-1 py-2'>
                <a href=''>Residential</a>
                <a href=''>Commercial</a>
                <a href=''>Shopping Mall</a>
                <a href=''>Plot</a>
              </p>
            </div>

            <div className="">
              <h1 className='text-slate-400 text-lg hover:text-white cursor-default max-sm:text-base max-sm:font-bold'>CAREERS</h1>
              <p className='max-sm:text-sm text-base text-white  grid gap-1 py-2'>
                <a href=''>Why Us</a>
                <a href=''>Life at Pranami</a>
                <a href=''>Current Openings</a>
                <a href=''>Send Your CV</a>
              </p>
            </div>

            <div className=''>
              <h1 className='text-slate-400 text-lg hover:text-white cursor-default max-sm:text-base max-sm:font-bold'>OTHERS</h1>
              <p className='max-sm:text-sm text-base text-white  grid gap-1 py-2'>
                <a href=''>Media Coverage</a>
                <a href=''>Press Releases</a>
                <a href=''>Our Locations (Find Us)</a>
                <a href=''>Vendor Queries</a>
              </p>
            </div>
          </div>


          <hr className='2xl:mx-48 lg:mx-24 max-sm:mx-4 md:mx-12' />


          <div className='grid grid-cols-4 2xl:gap-60 2xl:px-56 2xl:ml-0 md:px-12 lg:gap-36 lg:ml-12 max-sm:px-4 max-sm:gap-2 max-sm:grid-cols-2 max-sm:text-center max-sm:mr-8'>
            <a href="" className='text-white text-lg max-sm:text-sm'>Login</a>
            <a href="" className='text-white text-lg max-sm:text-sm'>Disclaimer</a>
            <a href="" className='text-white text-lg max-sm:text-sm'>Privacy</a>
            <a href="" className='text-white text-lg max-sm:text-sm'>Terms and Conditions</a>
          </div>


          <div className='text-center text-bold text-xl text-white mt-2 max-sm:text-base py-2'>© 2024, Pranami Group</div>

        </div>
      </div>
    </div>




  )
}

export default Footer1
