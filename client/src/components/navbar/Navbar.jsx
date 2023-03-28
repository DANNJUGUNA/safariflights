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
            <li >About us</li>
            {/* <li> Flights</li> */}
            <Link to='/flight'> Flights</Link>
            <li >Bookings</li>
            <li >Sign up</li>
            <Link to='/login'>Log in</Link>
        </div>
    </nav>
  )
}

export default Navbar