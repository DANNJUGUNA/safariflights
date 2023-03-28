import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center px-5 min-h-[15vh]'  >
        {/* {log} */}
        <div>
          <p className='font-bold text-2xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
        </div>
        {/* {navigation Linknks} */}
        <div className=' text-white font-semibold flex justify-between gap-6 mr-5' >
            <Link to='/'>Home</Link>
            <Link to=''>About us</Link>
            <Link to=''>Flights</Link>
            <Link to='/bookings'>Bookings</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Login</Link>
        </div>
    </nav>
  )
}

export default Navbar