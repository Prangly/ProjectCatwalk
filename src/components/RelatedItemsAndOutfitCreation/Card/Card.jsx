/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Card({ card }) {
  const [action, takeAction] = useState();

  return (
    <div data-testid="card" className={styles.card}>
      <h4>Card</h4>
      <button onClick={() => takeAction()}>
        Action
      </button>
      <h4>{card.category}</h4>
      <h4>{card.name}</h4>
      <h4>
        $
        {' '}
        {card.default_price}
      </h4>
      <h4>{card.starRating}</h4>
      <img className={styles.cardImage} src={card.image} alt="" />
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
