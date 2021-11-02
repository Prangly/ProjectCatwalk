import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import WriteAReview from './WriteAReview/WriteAReview';
import SampleReviews from '../../SampleData/SampleReviews';
import ReviewsList from './ReviewsList/ReviewsList';

const RatAndRev = () => {
  const [currentRev, setCurrentRev] = useState(0);

  return (
    <div data-testid="ratAndRev" id={styles.ratingsAndReviews}>
      <h1>Ratings and Reviews</h1>
      <ReviewsList
        currentRev={currentRev}
        reviews={SampleReviews}
      />
      <WriteAReview />
    </div>
  );
};

RatAndRev.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default RatAndRev;
