/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import ReviewStarRating from '../StarRating/ReviewStarRating';

const Review = ({ review }) => {
  const { date } = review;
  const mmddyy = date.split('T');
  const justMmddyy = mmddyy[0];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const splitJustMmddyy = justMmddyy.split('-');
  const monthNumInt = parseInt(splitJustMmddyy[1]);
  const reviewDateMonth = months[monthNumInt - 1];
  const reviewDateDay = splitJustMmddyy[2];
  const reviewDateYear = splitJustMmddyy[0];

  const reviewDate = `${reviewDateMonth} ${reviewDateDay}, ${reviewDateYear}`;
  return (
    <span data-testid="review" id={styles.review}>
      <ReviewStarRating rating={review.rating} />
      {reviewDate}
      <br />
      {review.summary}
      <br />
      {review.body}
      <br />
      {review.recommend}
      <br />
      {review.reviewer_name}
      <br />
      {review.response}
      <br />
      {review.helpfulness}
      <br />
      <br />
    </span>
  );
};

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
