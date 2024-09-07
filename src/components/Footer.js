import c1 from "../assets/images/c1.png";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../assets/images/youtube.svg";
import { ReactComponent as Whatsapp } from "../assets/images/whatsapp.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";


export const Footer = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
      }, [])

      return (
            <footer className=" bg-gray-950 pl-4 pr-4  ">
                  <div className=" grid grid-cols-1 gap-2  ml-6  mb-4 lg:grid-cols-3 lg:ml-16 max-sm:py-6  ">
                        <div className="content-center  w-auto mt-8 mb-8 lg:mt-12">
                              <img src={c1} alt="" className="h-16 w-16 " />
                              <p className="max-sm:text-sm 2xl:text-lg text-lg -ml-4 mt-4 content-center text-gray-400 w-auto lg:w-2/3 lg:text-sm">Aaliya Construction is a renowned name in the Real Estate sector with an experience of more than 7 Years guiding through its growth. We are committed to deliver, what we promise every time and before time.</p>
                              <div className="grid grid-cols-8 gap-5 mt-6 ">

                                    <a className="fill-orange-600 h-8 w-8 -mt-1 2xl:h-10 2xl:w-10  hover:scale-110 hover:transition-transform" href="https://www.facebook.com/AaliyaConstructionRanchi" target="_blank" rel="noreferrer"><Facebook /> </a>
                                    <a className="fill-orange-600 h-8 w-8 2xl:h-10 2xl:w-10  hover:scale-110 hover:transition-transform" href="https://www.instagram.com/aaliyaconstruction/  " target="_blank " rel="noreferrer"><Instagram /> </a>
                                    <a className="fill-orange-600 h-8 w-8 2xl:h-10 2xl:w-10  hover:scale-110 hover:transition-transform" href="https://www.youtube.com/@aaliyaconstruction" target="_blank" rel="noreferrer"><Youtube /></a>
                                    <a className="fill-orange-600 h-8 w-8 2xl:h-10 2xl:w-10  hover:scale-110 hover:transition-transform" href="https://api.whatsapp.com/send?phone=916205408020&text=Hello%2C%20I%20want%20more%20info%20about%20Sushil%20Residency" target="_blank" rel="noreferrer">
                                          <Whatsapp /></a>
                              </div>
                        </div>
                        <div className="content-center 2xl:mt-6 mt-4 ml-12 max-sm:py-6 max-sm:mt-8 max-sm:ml-0">
                              <h1 className="text-white max-sm:text-sm text-xl -mt-12  2xl:text-2xl font-bold ">Our Company</h1>

                              <nav className="  mt-4">
                                    <NavLink to="/" className="  text-gray-400 hover:text-white mt-2 flex items-center lg:text-sm 2xl:text-lg"><span className="material-symbols-outlined text-orange-500 mr-2">
                                          chevron_right
                                    </span>Home</NavLink>
                                    <NavLink to="/about" className=" text-gray-400 hover:text-white flex items-center  lg:text-sm mt-2 2xl:text-lg" ><span className="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>About</NavLink>
                                    <NavLink to="/projects" className=" text-gray-400 hover:text-white flex items-center  lg:text-sm mt-2 2xl:text-lg"  ><span className="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>Project</NavLink>
                                    <NavLink to="/contact-us" className=" text-gray-400 hover:text-white flex items-center  lg:text-sm mt-2 2xl:text-lg"  ><span className="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>Contact</NavLink>
                              </nav>

                        </div>
                        <div className="content-center mt-2 2xl:mt-4 -mb-4 max-sm:py-6 max-sm:mt-0">
                              <h1 className="text-white max-sm:text-sm text-xl 2xl:text-2xl font-bold">Contact Details</h1>
                              <a className="mt-6  text-gray-400 flex items-center  max-sm:text-sm 2xl:text-lg text-lg lg:text-sm"><span className="material-symbols-outlined text-orange-500  mr-2">
                                    location_on
                              </span>Road No.0,Bando Haat,HawaiNagar, Ranchi,Jharkhand-834003</a>
                              <a className="mt-6  text-gray-400  max-sm:text-sm 2xl:text-lg text-lg flex items-center lg:text-sm"><span className="material-symbols-outlined  text-orange-500  mr-2">
                                    call
                              </span>+91 6205408020</a>
                              <a  className="mt-6  text-gray-400 items-center  max-sm:text-sm 2xl:text-lg text-lg flex lg:text-sm"><span className="material-symbols-outlined  text-orange-500  mr-2">
                                    call
                              </span>+91 6205599190</a>
                              <a className="mt-6 text-gray-400 items-center  max-sm:text-sm 2xl:text-lg text-lg flex lg:text-sm"><span className="material-symbols-outlined  text-orange-500  mr-2">
                                    mail
                              </span>aaliyaconstruction2013@gmail.com</a>
                        </div>
                  </div>
                  <hr className=" border-slate-800  mt-4 mb-4 lg:mt-12" />
                  <div className="grid grid-cols-1  text-center mt-4  lg:grid-cols-2 ">
                        <div className="   text-sm 2xl:text-xl  text-gray-200 font-bold mb-4">Copyright © 2024 Aaliya Construction</div>
                        <p className="text-sm 2xl:text-xl  text-gray-200 font-bold mb-4">
                            Website Developed at <a href="https://theroguepixxel.com" target="_blank" rel="noreferrer" className="group text-green-500 hover:text-white transition-colors ">the, rogue Pix<small className="text-white group-hover:text-green-500 transition-colors">x</small>el</a>.
                        </p>
                  </div>
            </footer>
      )
}
