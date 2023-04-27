import React, { useRef } from 'react'
import {BsFillLightningFill} from 'react-icons/bs'
import {AiFillSafetyCertificate, AiOutlineGlobal} from 'react-icons/ai'
import { motion, useInView } from 'framer-motion'

function Services() {

  const ContainerVariant = {
    hidden: {
      opacity:0
     },
    show: {
      opacity:1,
      transition: {
        staggerChildren: 0.4,}
    }
  }
  
  const ItemVariant = {
    hidden: { 
      opacity: 0,
      y:60 },
    show: {
      opacity: 1,
      y:0,
      transition:{
        type:'tween',
        duration:0.8
      }
    },
  }

  const MyRef = useRef()
  const isInView = useInView(MyRef,{once:true})
  

  return (
    <div className='bg-primary' id='Services'>
      <div className='Custom_width px-4 pt-12 md:pt-24 p-12 md:pb-24 flex flex-col flex-wrap gap-4 justify-center'>   
        <div className='flex flex-col items-center'>
          <h1 className='text-white text-center pb-8 font-bold text-5xl uppercase'>
            We are known for
          </h1>
        </div>
        <motion.div className='flex flex-wrap justify-center gap-4'
        ref={MyRef}
        variants={ContainerVariant}
        initial="hidden"
        animate={isInView?"show":"hidden"}>
          
          <motion.div className='p-4 max-w-[350px] shadow-md bg-white rounded-sm flex flex-col items-center'
          variants={ItemVariant}>
              <div className='m-4 bg-secondary rounded-full w-20 h-20 flex justify-center items-center'>
                <BsFillLightningFill className='text-tertiary mx-auto' size={50}/>
              </div>
              <h1 className='font-bold text-2xl md:text-3xl py-2'>
                Fast delivery
              </h1>
              <p className='text-lg md:text-xl'>
                Using advanced technology were able to deliver it to u within first 24 hours
              </p>
          </motion.div>

          <motion.div className='p-4 max-w-[350px] shadow-md bg-white rounded-sm flex flex-col items-center cursor-pointer'
          variants={ItemVariant} >
              <div className='m-4 bg-secondary rounded-full w-20 h-20 flex justify-center items-center'>
                <AiFillSafetyCertificate className='m-4 text-tertiary mx-auto' size={50}/>
              </div>
              <h1 className='font-bold text-2xl md:text-3xl py-2 text-center'>
                Safety
              </h1>
              <p className='text-lg md:text-xl text-center'>
                We make sure to do it as safe as possible using ... to you dont have to worry about being scammed
              </p>
          </motion.div>

          <motion.div className='p-4 max-w-[350px] shadow-md bg-white rounded-sm flex flex-col items-center'
          variants={ItemVariant}>
              <div className='m-4 bg-secondary rounded-full w-20 h-20 flex justify-center items-center'>
                <AiOutlineGlobal className='m-4 text-tertiary mx-auto' size={50}/>
              </div>
              <h1 className='font-bold text-2xl md:text-3xl py-2 text-center'>
                We're global
              </h1>
              <p className='text-lg md:text-xl text-center'>
                Not only trused by big companies but we can help u event if u live in small town on the other side of earth
              </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services