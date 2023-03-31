import React, {createContext, useContext, useEffect, useState} from 'react';
// import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';




export const BookingContext = createContext({
    createBooking: () => {},
  });//




function BookingProvider({children}){
    // const navigate = useNavigate()
    const [bookings, setBookings] = useState()
    const [change, setOnChange] = useState(false)
    const { token, user } = useContext(AuthContext);
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

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };


  // Fetching bookings
  useEffect(() => {
    if (token) {
      fetch('/bookings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setBookings(response);
          console.log(response);
        });
    }
  }, [change, token]);




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