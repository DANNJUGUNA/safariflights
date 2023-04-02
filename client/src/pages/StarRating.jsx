
import React from "react";

function StarRating({ rating }) {
  const stars = [...Array(5)].map((_, i) => {
    const filled = i < rating;
    return filled ? (
      <span key={i} className="text-yellow-400 text-xl">
        ★
      </span>
    ) : (
      <span key={i} className="text-yellow-200 text-xl">
        ☆
      </span>
    );
  });

  return <span>{stars}</span>;
}

export default StarRating;




