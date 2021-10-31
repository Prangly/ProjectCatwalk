/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Card({ card }) {
  console.log(card);
  return (
    <div data-testid="card" id={styles.card}>
      <li>
        Card
      </li>
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
