import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import ReviewStarRating from '../StarRating/ReviewStarRating';

const Review = ({ review }) => (
  <span data-testid="review" id={styles.review}>
    <ReviewStarRating rating={review.rating} />
    {review.date}
    {review.summary}
    {review.body}
    {review.recommend}
    {review.reviewer_name}
    {review.response}
    {review.helpfulness}
  </span>
);

Review.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    summary: PropTypes.string,
    body: PropTypes.string,
    recommend: PropTypes.bool,
    reviewer_name: PropTypes.string,
    response: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};

export default Review;
