import React, { useEffect } from 'react'

import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const AnimateUpDown = ({children, direction= "up"}) => {
    const controls = useAnimation();
    const {ref,inView} = useInView({
        threshold: 0.2,
        triggerOnce:true,
    });

    useEffect(()=>{

        if(inView)
        {
            controls.start({
                 y: 0,
                 opacity: 1,
                 transition : { duration: 0.5},
                                 
            });
        }
        else{
            controls.start({
                y:  direction === "up" ? -100 : 100,
                opacity: 0,
            });
        }

    },[controls, inView, direction]);


  return (
   
     <motion.div ref={ref} animate={controls} initial={{  y: direction === "up" ? -100 : 100, opacity: 0}} >
        {children}
     </motion.div>
  )
}

export default AnimateUpDown
