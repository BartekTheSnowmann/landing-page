import React from 'react'
import { motion } from 'framer-motion'
import { HeroImg} from '../assets'

function Hero() {

  const ContainerVariant = {
    hidden:{
    },
    show:{
      transition:{
        staggerChildren:0.8
      }
    }
  }

  const ItemVariant = {
    hidden:{
      opacity:0,
      x:60,
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        type:'spring'
      }
    }
  }

  const ButtonVariant = {
    hidden:{
      opacity:0,
      y:60,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        delay: 2.4,
        type:'spring'
      }
    }
  }

  return (
    <motion.div className='bg-white'>
      <div className='Custom_width py-12 lg:py-24 gap-12 md:gap-4 grid sm:grid-cols-2 px-4' id='Home'>
          <motion.div 
          variants={ContainerVariant}
          initial='hidden'
          animate='show'
          className='self-center'>

              <motion.h1 className='text-6xl md:text-8xl font-extrabold uppercase'
              variants={ItemVariant}>
                We're
              </motion.h1>

              <motion.p className='text-6xl md:text-8xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r to-tertiary from-quaternary'
              variants={ItemVariant}>
                doing
              </motion.p>

              <motion.h1 className='text-6xl md:text-8xl font-extrabold uppercase'
              variants={ItemVariant}>
                this.
              </motion.h1>

              <p className='text-lg md:text-xl py-6 text-primary'>
                We use .... to make fancy things and to make your life easier. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tenetur!
              </p>

              <motion.div
              variants={ButtonVariant}
              initial='hidden'
              animate='show'>
                <a href="#Services">
                  <button className='bg-tertiary'>Get started</button>
                </a>  
              </motion.div>
          </motion.div>

          <div className='sm:col-start-2 row-start-2 sm:row-start-1 flex items-center justify-center'>
              <img src={HeroImg} alt="" />
          </div>

          <div className='row-start-3 sm:row-start-2 md:pt-16 sm:col-span-2 gap-x-4 flex flex-col md:flex-row justify-between lg:items-center'>
            <div>
              <h1 className='font-bold text-yellow-500 text-2xl md:text-3xl'>10k+ <span className='text-primary text-lg md:text-xl'>Users</span></h1>
            </div>
            <div>
              <h1 className='font-bold text-yellow-500 text-2xl md:text-3xl'>270+ <span className='text-primary text-lg md:text-xl'>380+ Lorem ipsum</span></h1>
            </div>
            <div>
              <h1 className='font-bold text-yellow-500 text-2xl md:text-3xl'>3500+ <span className='text-primary text-lg md:text-xl'>3500+ Lorem, ipsum.</span></h1>
            </div>
          </div>

          
      </div>
    </motion.div>
  )
}

export default Hero