/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Card({ card }) {
  if (card) {
    console.log(card.name);
  }

  const [action, takeAction] = useState();

    return (
      <div data-testid="card" id={styles.card}>
        <button onClick={() => takeAction()}>
          Action
        </button>
        <h4>Jacket</h4>
        <h4>Camo Onesie</h4>
        <h4>$140.00</h4>
        <h4>(Star Rating)</h4>
        <img className={styles.cardImage} src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" />
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
