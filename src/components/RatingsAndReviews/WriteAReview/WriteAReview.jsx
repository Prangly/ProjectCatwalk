/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './styles.css';
import StarRating from '../StarRating/StarRating';
import Characteristics from './Characteristics';
import ProductContext from '../../../ProductContext';

const WriteAReview = ({ openModal, setOpenModal, currentProductId }) => {
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [isRecommended, setIsRecommended] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState(null);
  const [characteristicsList, setCharacteristicsList] = useState([]);
  const { setIsError, setErrorCode } = useContext(ProductContext);

  const metaURL = '/meta';

  const submittedReview = {
    product_id: currentProductId,
    rating,
    summary,
    body,
    recommend: isRecommended,
    name,
    email,
    characteristics: Object.fromEntries(characteristicsList),
  };

  const getReviewsMeta = (id) => {
    axios.get(`${metaURL}/${id}`)
      .then(({ data }) => {
        setReviewsMeta(data);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  useEffect(() => {
    getReviewsMeta(currentProductId);
  }, [currentProductId]);

  const postReview = () => {
    axios.post('/writeReview', submittedReview)
      .then(() => setOpenModal(false))
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
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
          <textarea type="text" placeholder="Example: Best purchase ever!" cols="100" rows="1" maxLength="250" required onChange={(event) => setSummary(event.target.value)}></textarea>
        </span>
        <br />
        <br />
        <Characteristics characteristics={!openModal ? {} : reviewsMeta.characteristics} setCharacteristicsList={setCharacteristicsList} />
        <br />
        <br />
        <textarea type="text" placeholder="Why did you like the product or not?" cols="100" rows="10" maxLength="1000" required onChange={(event) => setBody(event.target.value)}></textarea>
        <br />
        <br />
        <h4>What is your nickname?</h4>
        <textarea type="text" placeholder="Example: jackson11!" cols="100" rows="1" maxLength="250" required onChange={(event) => setName(event.target.value)}></textarea>
        <br />
        <text id={styles.nameAndEmailText}>For privacy reasons, do not use your full name or email address</text>
        <br />
        <br />
        <h4>Your email</h4>
        <textarea type="text" placeholder="Example: jackson11@email.com" cols="100" rows="1" maxLength="250" required onChange={(event) => setEmail(event.target.value)}></textarea>
        <br />
        <text id={styles.nameAndEmailText}>For authentication reasons, you will not be emailed</text>
        <br />
        <br />
        <button type="submit" className="ourButton" onClick={postReview}>
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default WriteAReview;
