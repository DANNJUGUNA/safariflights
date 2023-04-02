import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/Authcontext'
import Review from '../../pages/Review'
const Navbar = () => {

  const{user,token,logout}=useContext(AuthContext)
  const handleOnclick = () => {logout()}
  return (
    <nav className=' mx-4 pb-1 flex flex-wrap justify-between items-center px-5 min-h-[15vh] border-b-2 border-white'  >
        {/* {log} */}
        <div className=' flex flex-col'>
          <p className='font-bold text-2xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
          <p className='text-white text-sm font-thin'> Customer Satisfaction Is Our Goal</p>
        </div>
        {/* {navigation Linknks} */}
        <div className=' text-white font-semibold flex flex-wrap justify-between gap-6 mr-5' >
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About us</Link>
            <Link to='/flight'> Flights</Link>
            {user? 
            <>
             <Link to='/bookings'>Bookings</Link>
             <Link onClick={handleOnclick} to='/'> Logout</Link>
             </>
             :
             <>
               <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Log in</Link>
                <Review user={user} token={token} />
             </>
          }
        </div>
    </nav>
  )
}

export default Navbar
