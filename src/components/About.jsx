import React, { useRef } from 'react'
import {AboutImg} from '../assets/index'
import { useInView,motion } from 'framer-motion'

function About() {

  const quoteRef = useRef()
  const isQuoteInView = useInView(quoteRef,{once:true})

  const HeadingVariant = {
    hidden:{
      opacity: 0,
      x:200
    },
    show:{
      opacity: 1,
      x:0,
      transition:{
        type: 'tween',
        duration: 0.8
      }
    }
  }

  return (
    <div className='bg-white py-12 md:py-24' id='About'> 
      <div className='overflow-hidden Custom_width grid gap-4 px-4'>
          <div>
            <p className='text-quaternary font-bold text-lg md:text-xl tracking-wider'>About us</p>
          </div>
          <div className='grid md:grid-cols-2 gap-4 justify-center md:justify-evenly'>
            <div>
              <img src={AboutImg} className='rounded-sm' />
            </div>       
            <div className='flex flex-col'>
                <motion.h1 className='pb-4 pt-4 md:pt-0 text-5xl font-bold uppercase'
                variants={HeadingVariant}
                initial='hidden'
                animate={isQuoteInView? 'show' : 'hidden'}>Starting with
                </motion.h1>
                <motion.p className='text-lg md:text-xl max-w-[400px]'
                variants={HeadingVariant}
                initial='hidden'
                animate={isQuoteInView? 'show' : 'hidden'}>
                idea of making our life simpler we were trying to do this and that. Along with our products we were better and better.
                We have gather many people and all of them wanna help u. We are trusted by best companies in the world and we hope we can also help u.
                </motion.p>
                <div className='flex justify-end items-center h-full w-full text-lg md:text-xl'
                ref={quoteRef}>
                    <h1 className='text-quaternary italic tracking-wider pt-8 text-right'>" If at first you dont succeed; call it version 1.0 "</h1>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About