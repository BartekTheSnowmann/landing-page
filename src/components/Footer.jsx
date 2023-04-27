import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineCopyright} from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-primary'>
      <div className='max-w-[1240px] mx-auto border-b-2 border-secondary bg-primary text-white grid grid-cols-2 items-baseline sm:grid-cols-3 py-12 gap-4 sm:gap-8 px-4'>
          <div>
          <h1 className='text-3xl font-bold text-white'>Logo<span className='bg-white text-primary rounded-bl-full rounded-tr-full px-3'>me</span></h1>
              <p className='max-w-[200px] text-gray-300 pt-2'>Funkcjonujemy od 1995r. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, temporibus!</p>
          </div>

          <div className='justify-self-center'>
              <h1 className='font-bold pb-2'>NAVIGATION 👇</h1>
              <ul className='flex flex-col gap-y-2 text-sm pt-2'>
              {['Home', 'Services' ,'About','Testimonials', 'Contact'].map((item)=>
              (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
              </ul>
          </div>
          
          <div className='justify-self-start sm:justify-self-end'>
              <h1 className='font-bold pb-2'>CONTACT US</h1>
              <ul className='flex flex-col gap-y-2 text-sm pt-2'>
                  <div className='flex items-center gap-x-2 text-[#4267B2] cursor-pointer'>
                      <AiFillFacebook size={25}/>
                      <p className='text-white hover:text-inherit'>Facebook</p>
                  </div>
                  <div className='flex items-center gap-x-2 text-[#8a3ab9] cursor-pointer'>
                      <AiFillInstagram size={25}/>
                      <p className='text-white hover:text-inherit'>Instagram</p>
                  </div>
                  <div className='flex items-center gap-x-2 text-[#00acee] cursor-pointer'>
                      <AiFillTwitterSquare size={25}/>
                      <p className='text-white hover:text-inherit'>Twitter</p>
                  </div>
                  
              </ul>
          </div>
      </div>
      <div className='flex items-center justify-center text-white py-6 gap-x-2'>
        <h1>copyright</h1>
        <AiOutlineCopyright />
        <p>LogoHey all rights reserved.</p>
      </div>
  </div>
  )
}

export default Footer