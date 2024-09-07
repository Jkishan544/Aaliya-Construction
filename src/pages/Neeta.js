import b2 from "../assets/images/b2.jpg";
import React  from 'react';
import c2 from "../assets/images/c2.jpg";
import Slider from "react-slick";
import G5 from "../assets/images/G5.png";
import G6 from "../assets/images/G6.png"; 
import map from "../assets/images/map.png";
import G7 from "../assets/images/G7.png";
import b3a from "../assets/images/b3a.jpg";
import { useEffect } from "react";
 import "yet-another-react-lightbox/styles.css";
import { HashLink } from 'react-router-hash-link';
import AnimateUpDown from "../components/Animate/AnimateUpdown";
import AnimateLeftRight from "../components/Animate/AnimateLeftRight";
import BookNow from "../components/BookNow";
import Tab1 from "../components/Tab1"
import Location from "../components/Location";
import Gym from "../components/Gym";
 
const Neeta = () => {

    function NextArrow(props) {
        return (<span
            className="material-symbols-outlined text-white hover:opacity-100 text-5xl absolute top-1/2 -right-0 z-10 shadow-2xl  hover:scale-110 hover:transition-transform" onClick={props.onClick}>Arrow_Circle_Right</span>)
    }
    function PrevArrow(props) {
        return (<span
            className="material-symbols-outlined text-white hover:opacity-100 text-5xl absolute  top-1/2 z-10 shadow-2xl  hover:scale-110 hover:transition-transform" onClick={props.onClick}>Arrow_Circle_left</span>)
    }
    const settings = {
        dots: true,
        autoplay: true,
        speed: 2000, 
        autoplaySpeed: 5000,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

     
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
     return (
 
            <div className="bg-slate-100">
  
                <section className="my-4 ">
                    <div className="image-wrap  absolute "><div style={{ backgroundImage: `url(${b2})` }} className="  h-full w-full bg-cover bg-center ">
                        <div className="absolute h-full w-full bg-gradient-to-r from-slate-400/10 to-slate-900/95">
                            <div className="flex flex-col items-center h-full w-full justify-center">
                                <AnimateUpDown direction='down'>
                                    <h2 className="font-Arizonia max-sm:text-6xl text-8xl 2xl:text-9xl">Neeta Residency </h2>
                                    <p className="font-Abhaya text-white text-3xl max-sm:text-lg mt-6 2xl:text-4xl text-center">Elegant | Comfortable | Opulent</p>
                                </AnimateUpDown>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>



                <section className="py-4 px-4 max-sm:py-2 max-sm:px-2">
                    <div className="grid grid-cols-2   lg:-ml-72 xl:-ml-28 2xl:-ml-8 ">
                        <div className="Relative z-10 h-64 w-2/3 border-2  py-8 px-8 mx-80 -mt-24 shadow-xl bg-white max-sm:py-6 max-sm:w-80 max-sm:h-52 max-sm:ml-4 2xl:mx-96 2xl:px-12 2xl:h-72">
                            <div className="flex flex-wrap justify-center">
                                <h2 className="font-bold font-serif text-2xl max-sm:text-xl 2xl:text-3xl">The New Frontier</h2>
                                <p className="font-barlow  text-gray-600 text-center my-6 max-sm:text-sm max-sm:my-2 2xl:text-lg">Located at one of the prime locations in the Ranchi, the Capital city of Jharkhand, Overlooking large green areas, Harmu River and the city skyline .</p>
                                <HashLink to="/neeta-residency#Book" className=" px-4 py-3 bg-primary text-white hover:scale-105 hover:transition-transform">Book Now</HashLink>
                            </div>
                        </div>
                        <div className=" relative -mt-52 h-auto max-sm:w-0 ">
                            <img src={c2} alt="" />
                        </div>
                        <div>
                        </div>
                    </div>
                </section>


                <Tab1 />


                <section className=" py-6 px-36 max-sm:px-6 max-sm:py-2 ">
                    <div className="flex-wrap w-auto justify-center flex">
                        <div className="xl:w-1/2  max-sm:w-auto">
                            <div className="grid grid-cols-2 gap-10 max-sm:grid max-sm:grid-cols-1  max-sm:text-center">
                                <AnimateLeftRight direction='left' delay={0.2}><div> <h1 className="font-abhaya-libre text-3xl text-slate-800 2xl:text-4xl"><span className="font-bold text-red-700">46</span> Units</h1>  <p className="font-nunito-sans 2xl:text-xl mt-2">IN GOOD MAINTENANCE </p></div></AnimateLeftRight>
                                <AnimateLeftRight direction='Right' delay={0.4}><div> <h1 className="font-abhaya-libre text-3xl text-slate-800 2xl:text-4xl"><span className="font-bold text-red-700">Large</span> Community Hall</h1>  <p className="font-nunito-sans 2xl:text-xl mt-2"> FOR YOUR SMALL OR BIG LIFE OCCASSIONS</p></div></AnimateLeftRight>
                                <AnimateLeftRight direction='left' delay={0.6}><div> <h1 className="font-abhaya-libre text-3xl text-slate-800 2xl:text-4xl"><span className="font-bold text-red-700">2 Private</span> Terrace Units </h1> <p className="font-nunito-sans 2xl:text-xl mt-2">  IN PEACE AND NATURAL AMBIENCE</p></div></AnimateLeftRight>
                                <AnimateLeftRight direction='Right' delay={0.8}><div> <h1 className="font-abhaya-libre text-3xl text-slate-800 2xl:text-4xl"><span className="font-bold text-red-700">Spacious</span> Gym </h1> <p className="font-nunito-sans 2xl:text-xl mt-2">TO MAKE YOUR WELLNESS AN EXPERIENCE</p></div></AnimateLeftRight>
                            </div>
                        </div>
                        <div className="xl:w-1/2  max-sm:w-auto xl:content-center pl-20 max-sm:py-12 max-sm:pl-0 ">
                            <div className="grid xl:grid-cols-2 xl:gap-12 lg:grid-cols-3 lg:gap-10 max-sm:grid max-sm:grid-cols-1   max-sm:gap-8">
                                <AnimateLeftRight direction='left' delay={0.2}>  <div className="font-nunito-sans text-2xl 2xl:text-3xl text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                 </span>  Modern Facde</div></AnimateLeftRight>
                                <AnimateLeftRight direction='Right' delay={0.4}>  <div className="font-nunito-sans text-2xl 2xl:text-3xl  text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                </span>  Driveway Jogging</div></AnimateLeftRight>
                                <AnimateLeftRight direction='left' delay={0.6}>    <div className="font-nunito-sans text-2xl  2xl:text-3xl text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                </span> EV Charging Station</div></AnimateLeftRight>
                                <AnimateLeftRight direction='Right' delay={0.8}>    <div className="font-nunito-sans text-2xl 2xl:text-3xl  text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                </span> Elder's Zone</div></AnimateLeftRight>
                                <AnimateLeftRight direction='left' delay={1.0}>    <div className="font-nunito-sans text-2xl 2xl:text-3xl  text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                </span> Ample Bike Parking</div></AnimateLeftRight>
                                <AnimateLeftRight direction='Right' delay={1.2}>    <div className="font-nunito-sans text-2xl 2xl:text-3xl  text-slate-600"><span class="material-symbols-outlined">
                                    check_circle
                                </span>  Greenery</div></AnimateLeftRight>
                            </div>
                        </div>
                    </div>
                </section>



                <section className=" py-6 px-36 max-sm:px-6 max-sm:py-2">
                    <div className="flex-wrap w-auto justify-center flex">
                        <div className="xl:w-1/2 xl:mt-24 max-sm:w-auto max-sm:mt-4">
                            <AnimateLeftRight direction='left' delay={0.2}>
                                <div className="w-auto  ">
                                    <img src={b3a} alt="" />
                                </div>
                            </AnimateLeftRight>
                            <div className=" flex flex-wrap mt-2 ">
                                <AnimateLeftRight direction='left' delay={0.2}>
                                    <h2 className=" font-abhaya-libre text-3xl 2xl:text-5xl mt-4">Modern Facade</h2></AnimateLeftRight>
                                <AnimateLeftRight direction='left' delay={0.6}>
                                    <p className=" font-nunito-sans text-gray-700 py-4 text-lg 2xl:text-2xl max-sm:text-base ">The 3 BHK Lavish Homes at Neeta Residency are set in a lush, lovely environment that enhances the building's aesthetic appeal.</p>
                                </AnimateLeftRight>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-full max-sm:w-full slider-container relative pl-4 max-sm:pl-0 max-sm:py-4">
                            <AnimateLeftRight direction='right' delay={0.2}>
                                <Slider {...settings}>
                                    <div className=" slide"><div style={{ backgroundImage: `url(${G5})` }} className="min-h-screen w-full max-sm:bg-contain bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6 "><b className="text-white text-2xl">G5</b></div></div>
                                    <div className=" slide"><div style={{ backgroundImage: `url(${G6})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6"><b className="text-white text-2xl">G6</b>   </div></div>
                                    <div className=" slide"><div style={{ backgroundImage: `url(${map})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900  py-6 px-6"><b className="text-white text-2xl">Site Plan</b>   </div></div>
                                    <div className=" slide"><div style={{ backgroundImage: `url(${G7})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6"> <b className="text-white text-2xl">G1-G4</b>  </div></div>
                                </Slider>
                            </AnimateLeftRight>
                        </div>
                    </div>
                </section>

                <Gym />
                <Location />
                <BookNow />

            </div>
     );
}

export default Neeta;