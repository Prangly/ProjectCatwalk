/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import ProductContext from '../../../ProductContext';
import ReviewStarRating from '../../RatingsAndReviews/StarRating/ReviewStarRating';
import averageStarRating from '../../../../Helpers/averageStarRating';

const productURL = '/';
const stylesShape = {
  results: [{
    photos: [{
      url: '',
    }],
  }],
};

function OutfitCard({ card, action, removeFromOutfit }) {
  const [productLoading, setProductLoading] = useState(true);
  const [stylesLoading, setStylesLoading] = useState(true);
  const [outfitProduct, setOutfitProduct] = useState({});
  const [outfitStyles, setOutfitStyles] = useState(stylesShape);
  const [rating, setRating] = useState(0);

  const { setErrorCode, setIsError } = useContext(ProductContext);
  const productAPI = (id) => {
    axios.get(`${productURL}products/${id}`)
      .then((data) => {
        setOutfitProduct(
          data.data,
          setProductLoading(false),
        );
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  const stylesAPI = (id) => {
    axios.get(`${productURL}styles/${id}`)
      .then((data) => {
        setOutfitStyles(
          data.data,
          setStylesLoading(false),
        );
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  if (card) {
    useEffect(() => {
      productAPI(card);
    }, [card]);

    useEffect(() => {
      stylesAPI(card);
    }, [card]);

    useEffect(() => {
      averageStarRating(card)
        .then((average) => {
          setRating(Math.round(average));
        });
    }, []);
  }

  if (productLoading || stylesLoading) {
    return (
      <div className={styles.card}>loading</div>
    );
  }

  return (
    <div data-testid="card" className={styles.card}>
      <button
        className="ourButton"
        onClick={() => removeFromOutfit(card)}
      >
        {action}
      </button>
      <div data-testid="card">
        <h6>
          {outfitProduct.category}
        </h6>
        <h4>
          {outfitProduct.name}
        </h4>
        <h4>
          $
          {' '}
          {outfitProduct.default_price}
        </h4>
        <ReviewStarRating rating={rating} />
        <img className={styles.cardImage} src={outfitStyles.results[0].photos[0].url} alt="" />
      </div>
    </div>
  );
}

OutfitCard.propTypes = {
  card: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  removeFromOutfit: PropTypes.func.isRequired,
};

export default OutfitCard;
