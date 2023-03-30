import React from 'react';
import Swal from 'sweetalert2';
import ReactStars from 'react-stars';

function Review() {

  const ratingChanged = (newRating) => {
    Swal.fire({
      title: 'Leave a Review',
      text: 'Please share your feedback',
      // input: 'textarea',
      // inputPlaceholder: 'Write your review here...',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonColor: '#EF4444',
      reverseButtons: true,
      preConfirm: (review) => {
        Swal.fire(
          'Thank you for your review!',
          '',
          'success'
        );
      }
    });
  }
 
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={'#ffd700'}
    />
  );
}

export default Review;
