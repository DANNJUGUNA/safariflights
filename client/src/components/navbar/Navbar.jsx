import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=' mx-4 pb-1 flex justify-between items-center px-5 min-h-[15vh] border-b-2 border-white'  >
        {/* {log} */}
        <div className=' flex flex-col'>
          <p className='font-bold text-2xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
          <p className='text-white text-sm font-thin'> Customer Satisfaction Is Our Goal</p>
        </div>
        {/* {navigation Linknks} */}
        <div className=' text-white font-semibold flex justify-between gap-6 mr-5' >
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About us</Link>
            <Link> Flights</Link>
            <Link to='/bookings'>Bookings</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Log in</Link>
        </div>
    </nav>
  )
}

export default Navbar