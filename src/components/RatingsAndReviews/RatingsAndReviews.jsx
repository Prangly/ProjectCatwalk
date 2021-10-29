import React from 'react';
import styles from './styles.css';
import WriteAReview from './WriteAReview/WriteAReview';

const RatAndRev = () => (
  <div data-testid="ratAndRev" id={styles.ratingsAndReviews}>
    <h1>Ratings and Reviews Parent Component</h1>
    <WriteAReview />
  </div>
);

export default RatAndRev;
