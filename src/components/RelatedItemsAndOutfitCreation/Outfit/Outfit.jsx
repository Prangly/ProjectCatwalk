import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import OutfitCard from '../OutfitCard/OutfitCard';

const cards = [
  {
    id: '61577',
    category: 'Pants',
    name: 'Morning Joggers',
    default_price: '40.00',
    starRating: 'Outfit 1 Star Rating',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '61578',
    category: 'Pants',
    name: "Slacker's Slacks",
    default_price: '65.00',
    starRating: 'Outfit 2 Star Rating',
    image: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
];
const action = 'Delete';
const cardList = cards.map((card) => <OutfitCard key={card.id} card={card} action={action} />);

function Outfit() {
  return (
    <ul data-testid="outfit" id={styles.outfit}>
      Outfit
      {cardList}
    </ul>
  );
}

export default Outfit;
