// Rating.js
import React from 'react';

function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <i
        key={i}
        className="fa-solid fa-star"
        style={{ color: 'orange' }}
      ></i>
    );
  }

  return <div>{stars}</div>;
}

export default Rating;

