/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './styles.css';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              id={styles.radio}
              type="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              id={styles.star}
              color={ratingValue <= (hover || rating) ? '#000000' : '#D3D3D3'}
              onMouseEnter={() => setHover(ratingValue)}
              onFocus={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onBlur={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
