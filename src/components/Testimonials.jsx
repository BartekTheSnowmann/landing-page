import React, { useState } from 'react'
import {logo, logo2, logo3, logo4, logo5} from '../assets/index'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import {Reviews } from '../data/Reviews'
import {motion } from 'framer-motion'

function Testimonials() {

    const [currentIndex, SetCurrentIndex] = useState(2) 
    const CurrentReview = Reviews[currentIndex]
    const [direction, setDirection] = useState('Prev')

    const handlePrev = () =>
    {
        SetCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1)
        setDirection('Prev')
    }
    const handleNext = () =>
    {
        SetCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1)
        setDirection('Next')
    }

  return (
    <div className='bg-primary' id='Testimonials'>
        <div>
            <div className='py-12 md:py-24'>
                <div className='text-center pb-12 md:pb-24'>
                    <h1 className='text-white text-center text-5xl font-bold uppercase'>our clients</h1>
                    <p className='text-lg md:text-xl text-secondary tracking-wider'>See what they have to say</p>
                </div>

            {/* People */}
                <div className='Custom_width min-h-[250px] overflow-hidden flex justify-center items-center'>
                    <AiFillCaretLeft className='text-tertiary hover:text-quaternary hover:scale-125 duration-300 cursor-pointer mx-2 z-10' size={40}
                    onClick={handlePrev}/>
                    <motion.div className='bg-white flex flex-wrap flex-1 py-4 md:py-8 px-4 gap-8 items-center md:px-12'
                        key={CurrentReview.id}
                        initial={direction === 'Next'? {opacity: 0.2, x: '100%'} : {opacity: 0.2, x: '-100%'} }
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1.2, type: 'spring'}}>
                        <div>
                            <img className='rounded-full max-h-[220px]' src={CurrentReview.img} />
                        </div>
                        <div className='flex-1 min-w-[220px]'>
                            <h1 className='text-xl font-bold text-yellow-500 py-2'>{CurrentReview.title}</h1>
                            <p className='italic text-lg md:text-xl'>" {CurrentReview.description} "</p>
                        </div>
                    </motion.div>
                    <AiFillCaretRight  className='text-tertiary hover:text-quaternary hover:scale-125 duration-300 cursor-pointer mx-2 z-10' size={40}
                    onClick={handleNext}/>
                </div>
            </div>
            
        {/* Brands */}
            <div className='flex flex-wrap justify-center md:justify-between gap-x-4 items-center bg-secondary w-full py-12 px-4'>
                {[logo,logo2,logo3,logo4,logo5].map((item)=>
                (
                    <div key={`logo-${item}`} className='w-[100px] sm:w-[120px] md:w-[140px]'>
                    <img src={item} alt={`${item}`} /> 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials