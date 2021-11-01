import React, { useState } from 'react';
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

export default RatAndRev;
