import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';




export const BookingContext = createContext({
    createBooking: () => {},
  });//




function BookingProvider({children}){
    // const navigate = useNavigate()
    const [bookings, setBookings] = useState()
    const [change, setOnChange] = useState(false)
    const { token, user } = useContext(AuthContext);
    const navigate = useNavigate();
//Adding bookings
const createBooking = async (flight_id) => {
    if (!user) {
      throw new Error('You must be logged in to book a flight.');
    }

    try {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id:user.id, flight_id:flight_id }),
      });

      if (!response.ok) {
        throw new Error('Error booking flight');
      }
      else{Swal.fire({
        icon: 'success',
        title: 'Booked successfully',
      })}
      navigate("/bookings");
      
      

    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };


  // Fetching bookings
  useEffect(() => {
    const fetchBookings = async () => {
      if (token) {
        try {
          const response = await fetch('/bookings', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Error fetching bookings');
          }

          const bookings = await response.json();
          setBookings(bookings);
          
          

        } catch (error) {
          console.error(error.message);
          throw error;
        }
      }
    };

    fetchBookings();
  }, [token]);
   








//Deleting a booking



const contextData ={
    bookings,
    createBooking,
}
    return(
        <>
        <BookingContext.Provider value ={contextData} >
        {children}
        </BookingContext.Provider>
        </>
    )
}
export default BookingProvider