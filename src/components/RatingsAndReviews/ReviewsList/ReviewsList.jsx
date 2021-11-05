/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import StarRating from '../StarRating/StarRating';

const ReviewsList = ({ reviews }) => {
  const reviewList = reviews.map((review) => <Review key={review.review_id} review={review} />);

  return (
    <div>
      <StarRating />
      <ul data-testid="reviewsList">
        {reviewList}
      </ul>
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsList;
