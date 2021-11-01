/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../styles.css';

Modal.setAppElement('#root');
function Card(props) {
  // const [action, takeAction] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div data-testid="card" className={styles.card}>
      <h4>Card</h4>
      <button onClick={() => setModalIsOpen(true)}>
        {props.action}
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
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
      <h4>{props.card.category}</h4>
      <h4>{props.card.name}</h4>
      <h4>
        $
        {' '}
        {props.card.default_price}
      </h4>
      <h4>{props.card.starRating}</h4>
      <img className={styles.cardImage} src={props.card.image} alt="" />
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
