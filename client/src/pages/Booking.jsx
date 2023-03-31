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
            <div key={booking.id}  className= "max-w-screen-lg ml-10 mt-8 p-10 bg-blue-200 border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    
                <div className='mb-4 font-serif font-bold text-3xl'>
                        
                        <p>Destination: {booking.flight.destination}</p>
                        <p>From:{booking.flight.from} </p>
                        <p>Duration:{booking.flight.duration}</p>
                        <p>Departure:{booking.flight.departure} </p>
                        <p>Cost:{booking.flight.cost} </p>
                        
                </div>
                <div className='flex justify-end'>
                <button type="button" className="focus:outline-none text-black bg-[#E99B04] hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Cancel Booking</button>
                </div>
            </div>
     ))}
              </div>
    )
}
export default Booking;