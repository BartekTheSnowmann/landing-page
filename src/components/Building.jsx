import React, { useRef } from 'react'
import { building1, building2 } from '../assets'
import { useInView, motion } from 'framer-motion'

function Building() {

    const ContainerVariant = {
        hidden: { 
          opacity: 0,
          y:200 },
        show: {
          opacity: 1,
          y:0,
          transition:{
            duration: 1.4,
            type:'spring'
        }   },
       
      }

    const MyRef = useRef()
    const isInView = useInView(MyRef,{once:true})

  return (
    <div className='py-12 md:py-24 border-img bg-primary' id='Building'>
        <div className='Custom_width px-4 flex flex-col md:flex-row items-center justify-around'>
            <motion.div 
            ref={MyRef}
            variants={ContainerVariant}
            initial='hidden'
            animate={isInView? 'show':'hidden'}
            className=''>
                <h1 className='text-white text-5xl font-bold uppercase'>We will give you
                  <p className='text-transparent bg-clip-text bg-gradient-to-r to-tertiary from-quaternary'>what u dream of</p>
                </h1>
                <p className='max-w-[400px] py-4 text-secondary text-lg md:text-xl'>
                You give us idea, we give u the end product made in the most elegant and simplest way.
                </p>
                <a href="#Contact">
                  <button className='bg-yellow-500'>Contact Us</button>
                </a>
            </motion.div>
            <motion.div className='pt-12'
            variants={ContainerVariant}
            initial='hidden'
            animate={isInView? 'show':'hidden'}>
                <img src={building2} alt="" className='max-w-[250px] rounded-sm'/>
                <img src={building1} alt="" className='max-w-[250px] rounded-sm relative -top-4 right-12 z-10'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Building