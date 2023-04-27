import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { motion,AnimatePresence } from 'framer-motion'

function Navbar() {

  const [menuOpen, SetMenuOpen] = useState(false)

  const ContainerVariant = {
    hidden: {
      x:'100%',
      transition:{
        type:'tween',
        duration: 0.4
      }
    },
    show: {
      x: 0,
      transition:{
        type:'tween',
        duration: 0.4
      }
    }
  }

  return (
    
    <div className='fixed top-0 bg-primary z-50 w-screen'>
      <div className='Custom_width flex items-center justify-between px-4 h-20'>
        <div>
          <a href="#Home">
            <h1 className='text-3xl font-bold text-white'>Logo<span className='bg-white text-primary rounded-bl-full rounded-tr-full px-3'>me</span></h1>
          </a>
        </div>
        <div>
          <ul className='hidden md:flex gap-x-4'>
            {['Home', 'Services' ,'About', 'Contact'].map((item)=>
            (
              <li className='navLink' key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='block md:hidden text-white'>
          <AiOutlineMenu 
          onClick={()=>SetMenuOpen(!menuOpen)}
          size={30} />
        </div>        

      </div>

      <AnimatePresence>
      {menuOpen && <motion.div className='bg-primary text-white z-10 fixed top-0 right-0 w-1/2 h-screen flex flex-col'
      variants={ContainerVariant}
      initial='hidden'
      animate='show'
      exit='hidden'>
        <div className='h-20 flex items-center px-4 justify-end'>
          <AiOutlineClose size={30}
          onClick={()=>SetMenuOpen(false)} />
        </div>
        <div className='h-full'>
          <ul className='shadow-xl shadow-primary flex flex-col justify-evenly items-center h-full gap-x-4'>
            {['Home', 'Services' ,'About', 'Contact'].map((item)=>
            (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default Navbar