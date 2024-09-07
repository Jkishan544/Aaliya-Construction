import GYM from "../assets/images/GYM.png";
import AnimateUpDown from "./Animate/AnimateUpdown";
import AnimateLeftRight from "./Animate/AnimateLeftRight";


export const Gym = () => {
    return (

        <section className="py-6">
            <AnimateUpDown direction='down'>
                <div className="opacity-75  minh w-auto bg-cover bg-center " style={{ backgroundImage: `url(${GYM})` }} >
                    <div className="   w-2/5 pt-64 mr-2 float-right max-sm:w-auto max-sm:pt-2">
                        <AnimateLeftRight direction='right' delay={0.2}>
                            <h2 className="font-bold font-serif text-white text-3xl  max-sm:text-2xl 2xl:text-4xl">Built For A Modern Life  </h2></AnimateLeftRight>
                        <AnimateLeftRight direction='right' delay={0.6}>
                            <p className="  text-white text-lg content-center py-3 2xl:text-xl">A large community hall to turn your special occasion into a party, as well as a gym equipped with all the equipment you need to keep in shape.</p>
                        </AnimateLeftRight>
                    </div>
                </div>
            </AnimateUpDown>
        </section>



    );
}

export default Gym;