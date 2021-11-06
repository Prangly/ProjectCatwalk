import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Review = ({ review }) => (
  <div data-testid="review" id={styles.review}>
    {review.rating}
    {review.date}
    {review.summary}
    {review.body}
    {review.recommend}
    {review.reviewer_name}
    {review.response}
    {review.helpfulness}
  </div>
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
