/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import styles from '../styles.css';
// import styles2 from '../../ProductDetail/StylesAndSizes/styles.css';
import sampleProduct from '../../../SampleData/SampleProduct.js';
// import ProductContext from '../../../ProductContext';
// import ReviewStarRating from '../../RatingsAndReviews/StarRating/ReviewStarRating';

const productURL = 'http://127.0.0.1:3000/';
const sampleStyles = {
  results: [{
    photos: [{
      url: 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    }],
  }],
};

// Modal.setAppElement('#root');
function RelatedCard({
  card, currentProduct, action, setCurrentProductID,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productSelected, selectProduct] = useState();

  const [relatedProduct, setRelatedProduct] = useState(sampleProduct);
  const [relatedStyles, setRelatedStyles] = useState(sampleStyles);

  // const { currentProductAvgRating } = useContext(ProductContext);

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
    productAPI(card);
  }, [card]);

  useEffect(() => {
    stylesAPI(card);
  }, [card]);

  return (
    <div className={styles.card}>
      <button
        style={{ justifyContent: 'flexEnd', alignItems: 'flexEnd' }}
        // className={styles.actionButton}
        onClick={(e) => {
          e.stopPropagation();
          setModalIsOpen(true);
        }}
      >
        {action}
      </button>
      <Link to={`/product/${card}`}>
        <div data-testid="card">
          <Modal data-testid="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className={styles.table}>

              <div className={styles.row}>
                <div className={styles.column}>
                  <div>
                    <h4>{currentProduct.name}</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>Name</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>{relatedProduct.name}</h4>
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>
                  <div>
                    <h4>{currentProduct.slogan}</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>Slogan</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>{relatedProduct.slogan}</h4>
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>
                  <div>
                    <h4>{currentProduct.description}</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>Description</h4>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <h4>{relatedProduct.description}</h4>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <button onClick={(e) => {
                e.stopPropagation();
                setModalIsOpen(false);
              }}
              >
                Close
              </button>
            </div>
          </Modal>
          <h6>{relatedProduct.category}</h6>
          <h4>{relatedProduct.name}</h4>
          <h4>
            $
            {' '}
            {relatedProduct.default_price}
          </h4>
          {/* <h4>{card.starRating}</h4> */}
          <img onClick={() => selectProduct(relatedProduct.id)} className={styles.cardImage} src={relatedStyles.results[0].photos[0].url} alt="" />
        </div>
      </Link>
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
