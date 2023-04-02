import React, { useContext, useEffect, useState, createContext } from 'react';
import { AuthContext } from '../context/Authcontext';

export const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const { token, user } = useContext(AuthContext);
    const [change, setOnChange] = useState(false);
   
    
    useEffect(() => {
      const fetchReviews = async () => {
        if (token) {
          try {
            const response = await fetch('/reviews', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
    
            if (!response.ok) {
              throw new Error('Error fetching Reviews');
            }
    
            const { reviews, average_rating } = await response.json();
            setReviews(reviews);
            setAverageRating(average_rating);
    
          } catch (error) {
            console.error(error.message);
            throw error;
          }
        }
      };
    
      fetchReviews();
    }, [change, token]);
    

 

  const contextData = {
    reviews,
    averageRating,
  };

  return (
    <ReviewsContext.Provider value={contextData}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsProvider;
