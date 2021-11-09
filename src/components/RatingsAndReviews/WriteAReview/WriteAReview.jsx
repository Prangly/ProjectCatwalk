/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import StarRating from '../StarRating/StarRating';

const WriteAReview = ({ openModal, setOpenModal, currentProductId }) => {
  const [isRecommended, setIsRecommended] = useState(false);
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState(null);

  const metaURL = 'http://127.0.0.1:3000/meta';

  const sampleReview = {
    product_id: 61579,
    rating,
    summary: 'Example small review of product',
    recommend: isRecommended,
    body: 'Example long review of product',
    name: 'person',
    email: 'email@email.com',
    characteristics: {
      206686: 5,
      206687: 4,
      206688: 3,
      206689: 2,
    },
    photos: [
      'https://i.imgur.com/xCeFAHu.jpeg',
      'https://i.imgur.com/wl1S7do.jpeg',
    ],
  };

  const submittedReview = {
    product_id: currentProductId,
    rating,
    summary,
    body,
    name: sampleReview.name,
    email: sampleReview.email,
    characteristics: {},
    photos: sampleReview.photos,
  };

  const getReviewsMeta = (id) => {
    axios.get(`${metaURL}/${id}`)
      .then(({ data }) => {
        setReviewsMeta(data);
      });
  };

  useEffect(() => {
    getReviewsMeta(currentProductId);
  }, [openModal]);

  const postReview = () => {
    console.log('reviews meta characteristics object', reviewsMeta.characteristics);
    axios.post('/writeReview', submittedReview)
      .then(() => console.log('review added'));
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
        <StarRating setRating={setRating} rating={rating} />
        <h4>What did you think of this product?</h4>
        <span>
          <textarea type="text" placeholder="Example: Best purchase ever!" cols="100" rows="1" maxLength="250" onChange={(event) => setSummary(event.target.value)}></textarea>
        </span>
        <br />
        <br />
        <textarea type="text" placeholder="Why did you like the product or not?" cols="100" rows="10" maxLength="1000" onChange={(event) => setBody(event.target.value)}></textarea>
        <br />
        <br />
        <button type="submit" onClick={postReview}>
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default WriteAReview;
