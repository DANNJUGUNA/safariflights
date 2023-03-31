import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { BookingsContext } from '../context/Bookingcontext';
function Booking(){
    const{user}=useContext(AuthContext)
    const{bookings}=useContext(BookingsContext)
    if (user&&bookings){
        console.log(bookings)
    }
    else{
        console.log("errors")
    }

    return(
       
        <div className='container mx-auto min-h-[80vh]'>
             {/* <h2 className='flex font-serif mb-2 text-5xl font-bold tracking-tight text-white dark:text-white'>Flight Details</h2> */}
             
             {bookings.map((booking) => (
           <div key={booking.id} className="max-w-screen-lg ml-10 mt-8 p-10 bg-blue-200 border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
           <div className="font-serif mb-4 text-3xl">
               <div className="flex items-center my-6">
                   <div className="font-bold mr-2 ml-7">Destination:</div>
                   <div className=''>{booking.flight.destination}</div>
               </div>
               <div className="flex items-center my-6">
                   <div className="font-bold mr-2 ml-7">From:</div>
                   <div className='ml-14'>{booking.flight.from}</div>
               </div>
               <div className="flex items-center my-6">
                   <div className="font-bold mr-2 ml-7">Duration:</div>
                   <div className='ml-7'>{booking.flight.duration}</div>
               </div>
               <div className="flex items-center my-6">
                   <div className="font-bold mr-2 ml-7">Departure:</div>
                   <div className='ml-7'>{booking.flight.departure}</div>
               </div>
               <div className="flex items-center my-6 ">
                   <div className="font-bold mr-2 ml-7">Cost:</div>
                   <div className='ml-14'>{booking.flight.cost}</div>
               </div>
           </div>
           <div className="flex justify-end">
               <button type="button" className="px-5 py-2.5 mr-2 mb-2 text-sm font-medium text-black bg-[#E99B04] rounded-lg focus:outline-none hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
                   Cancel Booking
               </button>
           </div>
       </div>
       
     ))}
              </div>
    )
}
export default Booking;