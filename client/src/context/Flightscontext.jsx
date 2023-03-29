import React ,{useContext,useEffect,useState,createContext}from 'react'
export const FlightContext = createContext();

const FlightsProvider=({children})=>{
    const[flights,setFlights]=useState()
   
    useEffect(()=>{
        fetch("/flights",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setFlights(response)
            
        }
        )
    },[])

    const contextData={
        flights
    }
return (
    <FlightContext.Provider value={contextData}>
    {children}
 </FlightContext.Provider>
)

}
export default FlightsProvider