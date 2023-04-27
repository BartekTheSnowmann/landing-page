import React, { useRef, useState } from 'react'
import {UndrawContactImg } from '../assets'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'

function Contact() {
  
  const [writersName, setWritersName] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const ToggleModal = () =>
  {
    setModalOpen(prev=>!prev)
  }

  const FormRef = useRef()
  const HandleSubmit = (e) =>
  {
    e.preventDefault()
    ToggleModal()
    FormRef.current.reset()
  }

  return (
    <>
    <div>
      <div className='Custom_width py-12 md:py-24 px-4' id='Contact'>
        <div>
          <h1 className='text-5xl font-bold px-2 pb-12 md:pb-24 uppercase'>Let's Talk</h1>
        </div>
        <div className='flex justify-evenly items-end flex-wrap'>
          <form className='flex-1 flex flex-col'
          ref={FormRef}
          onSubmit={HandleSubmit}>
                  <div className='relative'>
                    <input onChange={e=>setWritersName(e.target.value)} id="email" type="text" className="peer w-full text-primary placeholder-transparent focus:outline-none focus:border-tertiary" placeholder="Name" />
                    <label htmlFor="email" className="absolute left-2 -top-4 -translate-y-1/2 text-xl transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-primary">Name</label>
                    </div>
                  <div className="relative mt-10">
                    <input id="name" type="text" className="peer w-full text-primary placeholder-transparent focus:outline-none focus:border-tertiary" placeholder="Email" />
                    <label htmlFor="name" className="absolute left-2 -top-4 -translate-y-1/2 text-xl transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-primary">Email</label>
                  </div>
                  <div className="relative mt-10">
                    <textarea cols="30" rows="10" id="message" type="text" className="peer w-full text-primary placeholder-transparent focus:outline-none focus:border-tertiary" placeholder="Message" />
                    <label htmlFor="message" className="absolute left-2 -top-4 -translate-y-1/2 text-xl transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-primary">Message</label>
                  </div>
                  <button className='bg-tertiary'>Send</button>
              </form>
              <div className='hidden md:block flex-1 self-center'>
                  <img src={UndrawContactImg} className='h-full' />
              </div>
          </div>
      </div>
    </div>
    <AnimatePresence>
      {modalOpen && <Modal ToggleModal={ToggleModal} writersName={writersName}/>}
    </AnimatePresence>
    </>
  )
}

export default Contact