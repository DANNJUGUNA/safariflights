
import React, { createContext, useEffect, useState } from 'react';

export const FlightContext = createContext();

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    fetch('/flights', { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFlights(data))
      .catch(error => {
        console.error('There was a problem fetching flights:', error);
      });
  }, []);

  const contextData = {
    flights
  };

  return (
    <FlightContext.Provider value={contextData}>
      {children}
    </FlightContext.Provider>
  );
};

export default FlightsProvider;
