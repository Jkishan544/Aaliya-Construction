import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import d1 from "../assets/images/d1.png";
import a1a from "../assets/images/a1a.jpg";
import d3 from "../assets/images/d3.png";
import d2 from "../assets/images/d2.png";
import d4 from "../assets/images/d4.png";
import d5 from "../assets/images/d5.png";
import d6 from "../assets/images/d6.png";
import d7 from "../assets/images/d7.png";
import brochure from "../assets/images/brochure.pdf"
import b2a from "../assets/images/b2a.jpg";
import Slider from "react-slick";
import React from "react";
import AnimateLeftRight from './Animate/AnimateLeftRight';
import AnimateUpDown from './Animate/AnimateUpdown';

 
const Tab1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        fade: true

    };

    return (

        <section className="py-6 px-36 max-sm:px-6 max-sm:py-2 ">
            <div className="w-full">
                <Tabs className={" "}>
                    <TabList className={"react-tabs__tab-list text-center"}>
                        <Tab className="tabs font-bold 2xl:text-xl">OVERVIEW</Tab>
                        <Tab className="tabs font-bold 2xl:text-xl">LAYOUT</Tab>
                        <Tab className="tabs font-bold 2xl:text-xl">BROCHURE</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="flex-wrap w-auto justify-center flex py-4">
                            <div className="xl:w-1/2 max-sm:w-auto">
                                <div className=" ">
                                    <AnimateLeftRight direction='left' delay={0.2}>
                                        <h1 className="text-4xl font-abhaya-libre py-4 2xl:text-5xl">Overview</h1></AnimateLeftRight>
                                    <AnimateLeftRight direction='left' delay={0.6}>
                                        <p className="font-nunito-sans text-slate-800 2xl:text-xl">Aaliya Construction is known for customer satisfaction, on-time completion, and ‘excellence in everything we do’. With the success of the recently completed projects ‘ <b>Sushil Residency</b>’ at Hatia, Ranchi, and ‘ <b>Holy Family School</b>’ at Kurdeg, Simdega along with the appreciations for the ongoing project ‘ <b>Gayatri Enclave</b>’ at singh More, Hatia, Ranchi We now have a new Goal “ <b>NEETA RESIDENCY</b>” at Harmu, Ranchi as <b>The New Frontier</b> of Aaliya Construction.</p>
                                    </AnimateLeftRight>
                                </div>
                                <AnimateUpDown direction='down'>
                                    <div className="grid grid-cols-3 gap-4  py-8 relative group max-sm:grid max-sm:grid-cols-1  ">
                                        <div className="hover:transition-transform hover:scale-105"><div style={{ backgroundImage: `url(${d1})` }} className="h-40 xl:h-40 lg:h-96 bg-cover bg-center   py-6 px-6"></div></div>
                                        <div className="hover:transition-transform hover:scale-105"><div style={{ backgroundImage: `url(${b2a})` }} className="h-40 xl:h-40 lg:h-96 bg-cover bg-center    py-6 px-6"></div></div>
                                        <div className="hover:transition-transform hover:scale-105"><div style={{ backgroundImage: `url(${a1a})` }} className="h-40 xl:h-40 lg:h-96 bg-cover bg-center     py-6 px-6"></div></div>
                                    </div>
                                </AnimateUpDown>
                            </div>
                            <div className=" max-sm:w-auto lg:w-full xl:w-1/2 pl-4 max-sm:px-4 ">
                                <AnimateLeftRight direction='Right' delay={0.2}  >
                                    <iframe width="100%" height="440" className="max-sm:w-80" src="https://www.youtube.com/embed/2JDGX-Klgto?si=I6sZC4DOfilGYApK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ReferrerPolicy="strict-origin-when-cross-origin" AllowFullScreen></iframe>
                                </AnimateLeftRight>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="w-auto  py-10 max-sm:py-6">
                            <AnimateUpDown direction='up'>
                                <h1 className="text-6xl max-sm:text-4xl text-center font-abhaya-libre py-8">Flat Layouts</h1>
                            </AnimateUpDown>
                            <div className="w-auto py-10 max-sm:py-4">
                                <Slider {...settings}>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col">
                                            <img className="w-1/2 max-sm:w-auto" src={d4} alt="" />
                                            <div className=" px-24 text-right max-sm:px-10 ">
                                                <h2 className="text-2xl font-bold font-abhaya-libre py-6 text-orange-400">LAYOUT-1(1478 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500 "><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G1 TO G3 </h3> <p className="text-center font-bold">Flat-1</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5 </h3><p className="text-center font-bold">Flat-1</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6 </h3><p className="text-center font-bold">Flat-1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col ">
                                            <img className="w-1/2  max-sm:w-auto" src={d5} alt="" />
                                            <div className=" px-24 text-right ">
                                                <h2 className="text-2xl font-bold py-6 font-abhaya-libre text-orange-400">LAYOUT-2(1350 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR -G1 TO G3</h3><p className="text-center  font-bold">Flat-2</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5  </h3><p className="text-center  font-bold">Flat-2</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6  </h3><p className="text-center  font-bold">Flat-2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col">
                                            <img className="w-1/2  max-sm:w-auto" src={d6} alt="" />
                                            <div className=" px-24 text-right">
                                                <h2 className="text-2xl font-bold py-6 font-abhaya-libre text-orange-400">LAYOUT-3(1548 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G1 TO G3  </h3><p className="text-center  font-bold">Flat-3</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5 </h3><p className="text-center  font-bold">Flat-3 <br />(With Private Tarrace)</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6 </h3><p className="text-center  font-bold">N/A</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col">
                                            <img className="w-1/2  max-sm:w-auto" src={d7} alt="" />
                                            <div className=" px-24 text-right">
                                                <h2 className="text-2xl font-bold py-6 font-abhaya-libre text-orange-400">LAYOUT-4(1474 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G1 TO G3 </h3><p className="text-center  font-bold">Flat-4</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5 </h3> <p className="text-center  font-bold">Flat-4</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6 </h3><p className="text-center  font-bold">Flat-3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col">
                                            <img className="w-1/2  max-sm:w-auto" src={d2} alt="" />
                                            <div className=" px-24 text-right">
                                                <h2 className="text-2xl font-bold py-6 font-abhaya-libre text-orange-400">LAYOUT-5(1748 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G1 TO G3 </h3><p className="text-center  font-bold">Flat-7</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5 </h3><p className="text-center  font-bold">Flat-7</p>
                                                <h3 className="font-bold py-3 flex font-nunito-sans text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6 </h3><p className="text-center  font-bold">Flat-6</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex w-full flex-row items-center max-sm:flex-col">
                                            <img className="w-1/2  max-sm:w-auto" src={d3} alt="" />
                                            <div className=" px-24 text-right">
                                                <h2 className="text-2xl font-bold py-6 font-abhaya-libre text-orange-400">LAYOUT-6(1407 Sq.ft)</h2>
                                                <h3 className="font-bold py-3 flex  text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G1 TO G3 </h3><p className="text-center  font-bold">Flat-8</p>
                                                <h3 className="font-bold py-3 flex  text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G5 </h3><p className="text-center  font-bold">Flat-8  <br />(With Private Tarrace)</p>
                                                <h3 className="font-bold py-3 flex  text-green-500"><span className="material-symbols-outlined ">
                                                    arrow_circle_right
                                                </span>FLOOR - G6 </h3><p className="text-center  font-bold">N/A</p>
                                            </div>
                                        </div>
                                    </div>


                                </Slider>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <AnimateUpDown direction='up'>
                            <h1 className="text-center text-3xl max-sm:text-2xl font-abhaya-libre  2xl:text-5xl py-8">Download Brochure</h1>
                        </AnimateUpDown>
                        <div className="flex-wrap w-auto flex ">
                            <div className="xl:w-1/2 max-sm:w-auto">
                                <AnimateLeftRight direction='left' delay={0.2}  >
                                    <div>
                                        <img src={d1} alt="" />
                                        <div className="flex flex-wrap justify-center py-6">
                                            <a href={brochure} target="_blank" rel="noreferrer" className=" bg-orange-600 text-white inline-flex px-8 hover:bg-slate-800  py-4 items-center text-2xl  hover:scale-105 hover:transition-transform">BROCHURE</a>
                                        </div>
                                    </div>
                                </AnimateLeftRight>
                            </div>  
                            <div className="w-1/2 max-sm:w-0 max-sm:h-0 max-sm:invisible lg:invisible xl:visible pl-4 ">
                                <AnimateLeftRight direction='Right' delay={0.2}  >
                                    <object class="pdf" className="max-sm:w-80 w-full "
                                        data={brochure}
                                        width="785"
                                        height="550">
                                    </object>
                                </AnimateLeftRight>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </section>


    );
}

export default Tab1;

