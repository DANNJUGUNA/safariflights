import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"


export const BookingsContext = createContext();



function BookingsProvider({children}){
    const navigate = useNavigate()
    const [bookings, setBookings] = useState()
    const [change, setOnChange] = useState(false)
//Adding bookings
const AddBookings = (flight_id, user_id) =>{
fetch ("/bookings",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        user_id, flight_id
    })
})
.then(response =>response.json())
.then(response =>{
    console.log("add bookings",response)
if (response.errors){
    Swal.fire({
        icon: 'error',
        title: "Oops...",
        text: response.errors,
    })
}else if(response.sucess){
    Swal.fire({
        position: 'center',
        icon: 'Booked successfully',
        title: response.success,
        timer: 2000
    })
    setOnChange (!change)
}else{
    Swal.fire({
        icon: 'Error',
        title: "Something went wrong",
    })
}
    
})

}




//fetching bookings
    useEffect(()=>{
        fetch ("/bookings",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then(res=>res.json())
        .then(response=>{
            setBookings(response)
            console.log(response)
        }
        )
    }, [change])

//Deleting a booking



const contextData ={
    bookings,
    AddBookings
}
    return(
        <>
        <BookingsContext.Provider value ={contextData} >
        {children}
        </BookingsContext.Provider>
        </>
    )
}
export default BookingsContext;