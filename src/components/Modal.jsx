import {motion} from "framer-motion"
import {useEffect, useRef } from "react"
import {AiFillMail, AiOutlineClose} from 'react-icons/ai'

function Modal({ToggleModal,writersName}) {

    const ModalRef = useRef()
    useEffect(()=>
    {   
        function Handler(e)
        {
            if(!ModalRef.current.contains(e.target))
            {
                ToggleModal()
            }
        }
        window.addEventListener('click', Handler)
        return()=>window.removeEventListener('click',Handler)
    })

    const ModalVariant = {
        hidden:{
            opacity:0,
            y:60,
        },
        exit:{
            opacity:0,
        },
        show:{
            opacity: 1,
            y:0,
            transition:{
                type:'spring',
                duration:0.6
            }
        }
    }

  return (
    <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/70 flex flex-col items-center justify-center">
            <motion.div className='bg-white w-[250px] sm:w-[350px] md:w-[400px] h-[150px] md:h-[250px] flex flex-col p-2 gap-2 rounded-md text-center'
            ref={ModalRef}
            variants={ModalVariant}
            initial='hidden'
            animate='show'
            exit='exit'>
                <div className="w-full h-1/2 grid">
                    <div className="self-start justify-self-end">
                        <AiOutlineClose className='cursor-pointer w-6 h-6 md:w-8 md:h-8' 
                        onClick={()=>ToggleModal()}/>
                    </div>
                    <div className="self-center justify-self-center border-b-2 w-3/4 pb-2 justify-center grid">
                        <AiFillMail className='cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12'/>
                    </div>
                </div>
                <div className='justify-self-end'>
                    <h1 className='font-bold text-lg sm:text-xl md:text-2xl tracking-wide'>Thanks for Message 
                        <span className='text-tertiary'> {writersName ? writersName : 'Annon'}</span>!
                    </h1>
                </div>
          </motion.div>
        </div>
    </>
  )
}

export default Modal