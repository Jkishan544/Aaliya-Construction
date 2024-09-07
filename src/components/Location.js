import school from "../assets/images/school.jpg";
import hospital from "../assets/images/hospital.jpg";
import bus from "../assets/images/bus.jpg";
import train from "../assets/images/train.jpg";
import mall from "../assets/images/mall.jpg";
import market from "../assets/images/market.jpg";
import park from "../assets/images/park.jpg";
import airport from "../assets/images/airport.jpg";
import AnimateLeftRight from "./Animate/AnimateLeftRight";
 
const Location = () => {
    return (
 
        <section className=" py-6 px-36 max-sm:px-6 max-sm:py-2">
            <div className="flex-wrap w-auto  flex">
                <div className="xl:w-1/2   max-sm:w-auto ">
                    <div className="   ">
                        <AnimateLeftRight direction='left' delay={0.2}  >
                            <h1 className="text-5xl font-bold font-Abhaya1 max-sm:text-3xl">It's All In The Location</h1></AnimateLeftRight>
                        <AnimateLeftRight direction='left' delay={0.6}  >
                            <p className="xl:w-auto font-nunito-sans text-gray-900  max-sm:w-auto 2xl:text-xl mt-4">Away from the hustle and bustle of the city and yet the project has proximity to all the major pins of the town. Being located in Harmu, Ranchi, the project has easy accessibility to every corner of the city.</p>
                        </AnimateLeftRight>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pr-4 max-sm:pr-0 max-sm:grid max-sm:grid-cols-1 py-8">
                        <AnimateLeftRight direction='left' delay={0.2}>   <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${park})` }} className=" min-h-52 w-full bg-cover bg-center py-6 px-6 text-white opacity-80 content-end "><p className=" relative text-white text-xl z-10 font-bold 2xl:text-2xl">Park<br /><span className="text-base 2xl:text-xl">1km Away</span></p> <div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div></AnimateLeftRight>
                        <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${market})` }} className="  min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Market <br /><span className="text-base 2xl:text-xl"> 1km Away</span></p> <div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <AnimateLeftRight direction='Right' delay={0.4}  ><div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${school})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">School <br /><span className="text-base 2xl:text-xl"> 2km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div></AnimateLeftRight>
                        <AnimateLeftRight direction='left' delay={0.6}><div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${airport})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Airport <br /> <span className="text-base 2xl:text-xl">9km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>  </AnimateLeftRight>
                        <div className="hover:transition-transform hover:scale-110 min-h-52 w-full font-bold  max-sm:flex max-sm:flex-wrap max-sm:justify-center content-center text-center 2xl:text-xl">Near Veer Kunwar Singh Chowk, Harmu Housing Colony, Ranchi – 834002 </div>
                        <AnimateLeftRight direction='Right' delay={0.8}  > <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${hospital})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Hospital <br /><span className="text-base 2xl:text-xl"> 2km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div></AnimateLeftRight>
                        <AnimateLeftRight direction='left' delay={1.0}  > <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${train})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Railway <br /> <span className="text-base 2xl:text-xl">5km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-20 bg-black"></div></div></div></AnimateLeftRight>
                        <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${mall})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Mall <br /><span className="text-base 2xl:text-xl"> 3km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <AnimateLeftRight direction='Right' delay={1.2}  >    <div className="hover:transition-transform hover:scale-105 relative"><div style={{ backgroundImage: `url(${bus})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold 2xl:text-2xl">Bus stand <br /><span className="text-base 2xl:text-xl"> 4km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div></AnimateLeftRight>


                    </div>

                </div>
                <div className="xl:w-1/2 max-sm:w-full   lg:w-full">
                    <AnimateLeftRight direction='Right' delay={0.2}  >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d828.6378308051054!2d85.3022189!3d23.3629374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e10077f9aa15%3A0xa92d4c79dbcba8d1!2sNeeta%20Residency!5e1!3m2!1sen!2sin!4v1722232942650!5m2!1sen!2sin" title="neeta map location" width="100%" height="825" style={{ border: 0, width: '100%' }} AllowFullScreen=""></iframe>
                    </AnimateLeftRight>
                </div>
            </div>
        </section>



    );
}

export default Location;