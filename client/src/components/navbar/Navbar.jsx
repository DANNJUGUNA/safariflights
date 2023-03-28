import React, { useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Navbar = () => {
  
  return (
    <nav className=' mx-4 pb-1 flex justify-between items-center px-5 min-h-[15vh] border-b-2 border-white'  >
        {/* {log} */}
        <div className=' flex flex-col justify-start'>
          <p className='font-bold text-2xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
          <p className='text-white text-sm font-thin'> Customer Satisfaction Is Our Goal</p>
        </div>
        {/* {log} */}
      
          <ul className=' text-white font-semibold flex justify-end gap-6 mr-5' >
            <Link to='/' className='hover:text-[#E99B04] transition-all duration-500 ease-in-out'><li>Home</li></Link>
            <Link to='/aboutus' className='hover:text-[#E99B04] transition-all duration-500 ease-in-out'><li>About us</li></Link>
            <Link to='/flights' className='hover:text-[#E99B04] transition-all duration-500 ease-in-out'> <li>Flights</li></Link>
            <Link to='/bookings' className='hover:text-[#E99B04] transition-all duration-500 ease-in-out'><li>Bookings</li></Link>
            <button className='hover:bg-[#e99b04] border border-[#E99B04] rounded-full py-2 px-4 transition-all duration-500 ease-in-out'>
              <Link to='/signup'><li>Sign up</li></Link>
            </button>
            <button className='border border-[#E99B04] hover:bg-[#E99B04] py-2 px-4 rounded-full transition-all duration-500 ease-in-out'>
              <Link to='/login'><li>Log in</li></Link>
            </button>
          </ul>
    </nav>
    // </headers>
    
  )
}

export default Navbar