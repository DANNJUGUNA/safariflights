import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=' mx-4 pb-1 flex justify-between items-center px-5 min-h-[15vh] border-b-2 border-white'  >
        {/* {log} */}
        <div>
          <p className='font-bold text-2xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
        </div>
        {/* {navigation Linknks} */}
        <div className=' text-white font-semibold flex justify-between gap-6 mr-5' >
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About us</Link>
            <li> Flights</li>
            <li >Bookings</li>
            <li >Sign up</li>
            <Link to='/login'>Log in</Link>
        </div>
    </nav>
  )
}

export default Navbar