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
import ProductContext from '../../../ProductContext';
import ReviewStarRating from '../../RatingsAndReviews/StarRating/ReviewStarRating';
import averageStarRating from '../../../../Helpers/averageStarRating';
import ModalStyle from '../../ModalStyle/ModalStyle';

function RelatedCard({
  card, currentProduct, action, setCurrentProductID,
}) {
  const productURL = '/';
  const initialStyles = {
    results: [{
      photos: [{
        url: '',
      }],
    }],
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productSelected, selectProduct] = useState();
  const [relatedProduct, setRelatedProduct] = useState({});
  const [relatedStyles, setRelatedStyles] = useState(initialStyles);
  const [rating, setRating] = useState(0);
  const { setErrorCode, setIsError } = useContext(ProductContext);

  if (productSelected) {
    setCurrentProductID(productSelected);
    selectProduct(false);
  }

  const stylesAPI = (id) => {
    axios.get(`${productURL}styles/${id}`)
      .then((data) => {
        setRelatedStyles(data.data);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  const productAPI = (id) => {
    axios.get(`${productURL}products/${id}`)
      .then((data) => {
        setRelatedProduct(data.data);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

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

  return (
    <div className={styles.card}>
      <button
        style={{ justifyContent: 'flexEnd', alignItems: 'flexEnd' }}
        className={`${styles.actionButton} ourButton`}
        onClick={(e) => {
          e.stopPropagation();
          setModalIsOpen(true);
        }}
      >
        {action}
      </button>
      <Link to={`/product/${card}`}>
        <div data-testid="card">
          <Modal style={ModalStyle} data-testid="modal" id={styles.modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className={styles.table}>

              <div className={styles.row}>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{currentProduct.name}</h4>

                </div>
                <div className={styles.column}>

                  <h4> </h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{relatedProduct.name}</h4>

                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{currentProduct.slogan}</h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>Slogan</h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{relatedProduct.slogan}</h4>

                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{currentProduct.description}</h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>Description</h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>{relatedProduct.description}</h4>

                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>

                  <h4 className={styles.cell}>
                    $
                    {' '}
                    {currentProduct.default_price}
                  </h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>Price</h4>

                </div>
                <div className={styles.column}>

                  <h4 className={styles.cell}>
                    $
                    {' '}
                    {relatedProduct.default_price}
                  </h4>

                </div>
              </div>

            </div>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalIsOpen(false);
                }}
                className="ourButton"
              >
                Close
              </button>
            </div>
          </Modal>
          <div className={styles.cardText}>
            <div className={styles.productCategory}>{relatedProduct.category}</div>
            <div className={styles.productName}>{relatedProduct.name}</div>
            <div>
              $
              {' '}
              {relatedProduct.default_price}
            </div>
            <ReviewStarRating rating={rating} />
          </div>
          <img onClick={() => selectProduct(relatedProduct.id)} className={styles.cardImage} src={relatedStyles.results[0].photos[0].url} alt="Not Found" />
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
