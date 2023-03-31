import React, {useContext } from 'react'
import { AuthContext } from '../context/Authcontext';
import { FlightContext } from '../context/Flightscontext';
import { BookingContext } from '../context/Bookingcontext';

function Flight () {
  const{flights}=useContext(FlightContext)
  const {user}=useContext(AuthContext)
  const { createBooking } = useContext(BookingContext);

  
  const handleBookNow = (flight_id) => {
    try {
      createBooking(flight_id);
      
    } catch (error) {
      console.error(error.message);
      
    }
  };


  return(
    

 <div>
 
   <p className='flex items-center justify-center text-2xl mt-2 font-bold text-white underline underline-offset-8'>
    Available Flights</p>
    <div className='grid grid-cols-2 lg:grid-cols-4 pt-5 mx-5 mb-3 gap-6'>
   
      {
         flights && flights.map((flight,index)=>(
          
            <div key={index} className=" bg-white rounded-3xl shadow-md shadow-[#E99B04] p-6 w-full">
          
              <p className="text-lg font-bold">Destination:<span className=' font-normal pl-2 text-xl'>{flight.destination}</span></p>
              <p className="text-lg font-bold">From: <span className=' font-normal pl-2 text-xl'>{flight.from}</span></p>
      
              <p className="text-lg font-bold">Departure:<span className=' font-normal pl-2 text-xl'>{flight.departure}</span></p>
              <p className="text-lg font-bold">Duration: <span className=' font-normal pl-2 text-xl'>{flight.duration} </span></p>
              <p className="text-lg font-bold mb-2 ">Cost: <span className=' text-green-600 font-normal pl-2 text-lg '>${flight.cost}</span></p>
              <div className=' flex items-center justify-center'>
              { 
               user && (
                <button type="button" className="focus:outline-none text-black bg-[#E99B04] hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-1 dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"
                onClick={() => handleBookNow(flight.id)}>Book Now</button>
  
                // <p>Login to book </p>
                  )}
            </div>
          </div>
          ))}
    </div>
  </div>
  );   
}
export default Flight