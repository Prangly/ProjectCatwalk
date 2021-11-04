/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../styles.css';

// Modal.setAppElement('#root');
function Card({ card, action }) {
  // console.log('Card in card: ', card);
  // const [action, takeAction] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productSelected, selectProduct] = useState();

  if (productSelected) {console.log(productSelected)}

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
      <h4>{card.category}</h4>
      <h4>{card.name}</h4>
      <h4>
        $
        {' '}
        {card.default_price}
      </h4>
      {/* <h4>{card.starRating}</h4> */}
      <img onClick={() => selectProduct(card.id)} className={styles.cardImage} src={card.image} alt="" />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    starRating: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
