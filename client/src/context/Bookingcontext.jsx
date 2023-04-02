import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import Swal from 'sweetalert2';

export const BookingContext = createContext({
    createBooking: () => {},
  });

function BookingProvider({children}){
    // const navigate = useNavigate()
    const [bookings, setBookings] = useState()
    const { token, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [change, setOnChange] = useState(false);
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
      setTimeout(() => navigate('/bookings'), 1000);

      setOnChange(!change);
      
      

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
  }, [change, token]);
   
//Deleting a booking
const handleDelete = async (bookingId) => {
  if (!bookingId) {
    console.error('Invalid booking ID:', bookingId);
    return;
  }

  try {
    const response = await fetch(`/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`

      }
    });
    if (response.ok) {
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      Swal.fire({
        icon: 'success',
        title: 'Booking deleted successfully',
      });
    } else {
      const error = await response.json();
      Swal.fire({
        icon: 'error',
        title: 'Error deleting booking',
        text: error.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};



const contextData ={
    bookings,
    createBooking,
    handleDelete,
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