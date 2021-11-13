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

function OutfitCard({ card, action, removeFromOutfit }) {
  const productURL = '/';
  const initialStyles = {
    results: [{
      photos: [{
        url: '',
      }],
    }],
  };
  const [productLoading, setProductLoading] = useState(true);
  const [stylesLoading, setStylesLoading] = useState(true);
  const [outfitProduct, setOutfitProduct] = useState({});
  const [outfitStyles, setOutfitStyles] = useState(initialStyles);
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
      stylesAPI(card);
    }, [card]);

    useEffect(() => {
      averageStarRating(card, (err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      })
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
        style={{ justifyContent: 'flexEnd', alignItems: 'flexEnd' }}
        className={`${styles.actionButton} ourButton`}
        onClick={() => removeFromOutfit(card)}
      >
        {action}
      </button>
      <div data-testid="card">
        <div className={styles.cardText}>
          <div className={styles.productCategory}>{outfitProduct.category}</div>
          <div className={styles.productName}>{outfitProduct.name}</div>
          <div>
            $
            {' '}
            {outfitProduct.default_price}
          </div>
          <ReviewStarRating rating={rating} />
        </div>
        <img className={styles.cardImage} src={outfitStyles.results[0].photos[0].url} alt="Not Found" />
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
