import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => (
  <div data-testid="review">
    {review.rating}
    {review.summary}
  </div>
);

Review.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number,
    summary: PropTypes.string,
  }).isRequired,
};

export default Review;
