/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import StarRating from '../StarRating/StarRating';

const WriteAReview = ({ openModal, setOpenModal, currentProductId }) => {
  const [isRecommended, setIsRecommended] = useState(false);

  const postReview = () => {
    console.log('review to be added');
  };

  return (
    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
      <div>
        <h2>Add Your Review</h2>
        <text>
          Do you recommend this product?
          <br />
        </text>
        <text>Yes</text>
        <input name="recommend" type="radio" onClick={() => setIsRecommended(true)} />
        <text>No</text>
        <input name="recommend" type="radio" onClick={() => setIsRecommended(false)} />
        <br />
        <br />
        <StarRating />
        <h4>What did you think of this product?</h4>
        <textarea type="text" cols="100" rows="1" maxLength="250"></textarea>
        <h4>Please provide more detail about your answer below</h4>
        <textarea type="text" cols="100" rows="10" maxLength="1000"></textarea>
        <br />
        <button type="button" onClick={() => postReview()}>
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default WriteAReview;
