import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import ReactStars from 'react-stars';
import { AuthContext } from '../context/Authcontext';

function Review() {
  const { token, user } = useContext(AuthContext);


  const handleRatingChange = (newRating) => {
    if (user) {
      // User is logged in, save rating to backend
      fetch('/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: user.id, rating: newRating }),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire({
              title: 'Thank you for your rating!',
              text: `You gave us ${newRating} stars`,
              icon: 'success',
              confirmButtonText: 'OK',
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'There was an error saving your rating',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'There was an error saving your rating',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    } else {
      // User is not logged in, show prompt to log in
      Swal.fire({
        title: 'Log in to leave a rating',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Log in',
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#EF4444',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page
          window.location.href = '/login';
        }
      });
    }
  };
  console.log('token:', token);
console.log('user:', user);

  return (
    <ReactStars
      count={5}
      onChange={handleRatingChange}
      size={24}
      color2={'#ffd700'}
    />
  );
}

export default Review;
