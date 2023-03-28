import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className=' min-h-[10vh] py-3 border border-solid border-white rounded-lg mx-4'>
        <div className=' flex text-white items-center justify-center gap-2' >
            <p className='text-lg'>All rights preserved</p>
            <AiOutlineCopyrightCircle size={20}/>
            <p>2023</p>
            <p className='font-bold text-xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
        </div>
    </footer>
  )
}

export default Footer