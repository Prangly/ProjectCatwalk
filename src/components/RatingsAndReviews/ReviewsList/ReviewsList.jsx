/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewsList = ({ reviews }) => {
  const reviewList = reviews.results.map((review) => <Review key={review.review_id} review={review} />);

  return (
    <ul data-testid="reviewsList">
      {reviewList}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.shape({
    review_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ReviewsList;
