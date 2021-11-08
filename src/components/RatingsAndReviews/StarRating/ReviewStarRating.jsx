import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import styles from '../styles.css';

const ReviewStarRating = ({ rating }) => (
  (
    <div>
      {[...Array(rating)].map((star) => (
        <FaStar
          id={styles.star}
          color="#000000"
        />
      ))}
    </div>
  )
);

ReviewStarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewStarRating;
