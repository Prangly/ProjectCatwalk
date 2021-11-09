/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import sampleProduct from '../../../SampleData/SampleProduct.js';

const productURL = 'http://127.0.0.1:3000/';
const sampleStyles = {
  results: [{
    photos: [{
      url: 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    }],
  }],
};

function OutfitCard({ card, action, removeFromOutfit }) {
  const [outfitProduct, setOutfitProduct] = useState(sampleProduct);
  const [outfitStyles, setOutfitStyles] = useState(sampleStyles);

  const stylesAPI = (id) => {
    axios.get(`${productURL}styles/${id}`)
      .then((data) => {
        setOutfitStyles(data.data);
      });
  };

  const productAPI = (id) => {
    axios.get(`${productURL}products/${id}`)
      .then((data) => {
        setOutfitProduct(data.data);
      });
  };

  useEffect(() => {
    productAPI(card);
  }, [card]);

  useEffect(() => {
    stylesAPI(card);
  }, [card]);

  return (
    <div data-testid="card" className={styles.card}>
      <button onClick={() => removeFromOutfit(card)}>
        {action}
      </button>
      <h4>{outfitProduct.category}</h4>
      <h4>{outfitProduct.name}</h4>
      <h4>
        $
        {' '}
        {outfitProduct.default_price}
      </h4>
      {/* <h4>{card.starRating}</h4> */}
      <img className={styles.cardImage} src={outfitStyles.results[0].photos[0].url} alt="" />
    </div>
  );
}

OutfitCard.propTypes = {
  card: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  removeFromOutfit: PropTypes.func.isRequired,
};

export default OutfitCard;
