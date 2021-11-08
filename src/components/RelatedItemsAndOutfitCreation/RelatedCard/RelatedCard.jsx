/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
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

// Modal.setAppElement('#root');
function RelatedCard({ card, action, setCurrentProductID }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productSelected, selectProduct] = useState();

  const [relatedProduct, setRelatedProduct] = useState(sampleProduct);
  const [relatedStyles, setRelatedStyles] = useState(sampleStyles);

  // const dummyProduct = card;

  if (productSelected) {
    setCurrentProductID(productSelected);
    selectProduct(false);
  }

  const stylesAPI = (id) => {
    axios.get(`${productURL}styles/${id}`)
      .then((data) => {
        setRelatedStyles(data.data);
      });
  };

  const productAPI = (id) => {
    axios.get(`${productURL}products/${id}`)
      .then((data) => {
        setRelatedProduct(data.data);
      });
  };

  useEffect(() => {
    // if (typeof card === 'number') {
      productAPI(card);
    // }
  }, [card]);

  useEffect(() => {
    // if (typeof card === 'number') {
      stylesAPI(card);
    // }
  }, [card]);

  return (
    <div data-testid="card" className={styles.card}>
      <button onClick={() => setModalIsOpen(true)}>
        {action}
      </button>
      <Modal data-testid="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h3>Comparison Table</h3>
        <h4>Product Detail for One Item</h4>
        <h4>Product Detail for the Other Item</h4>
        <h4>Characteristics to Compare</h4>
        <div>
          <button onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
      <h4>{relatedProduct.category}</h4>
      <h4>{relatedProduct.name}</h4>
      <h4>
        $
        {' '}
        {relatedProduct.default_price}
      </h4>
      {/* <h4>{card.starRating}</h4> */}
      <img onClick={() => selectProduct(relatedProduct.id)} className={styles.cardImage} src={relatedStyles.results[0].photos[0].url} alt="" />
    </div>
  );
}

RelatedCard.propTypes = {
  card: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    starRating: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default RelatedCard;
