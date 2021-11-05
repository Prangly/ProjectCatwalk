import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import WriteAReview from './WriteAReview/WriteAReview';
import SampleReviews from '../../SampleData/SampleReviews';
import ReviewsList from './ReviewsList/ReviewsList';

const RatAndRev = ({ currentProduct }) => {
  console.log(currentProduct);
  const reviewURL = 'http://127.0.0.1:3000/reviews';
  const [currentRevs, setCurrentRev] = useState([]);
  const getReviews = (id, number) => {
    axios.get(`${reviewURL}/${id}/${number}`)
      .then(({ data }) => {
        setCurrentRev(data.results);
      });
  };
  useEffect(() => {
    console.log('current product id', currentProduct.id);
    getReviews(currentProduct.id, 2);
  }, [currentProduct]);

  return (
    <div data-testid="ratAndRev" id={styles.ratingsAndReviews}>
      <h1>Ratings and Reviews</h1>
      <ReviewsList
        currentRevs={currentRevs}
        reviews={currentRevs}
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
