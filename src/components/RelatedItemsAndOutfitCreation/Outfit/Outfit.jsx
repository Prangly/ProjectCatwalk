import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import OutfitCard from '../OutfitCard/OutfitCard';

const productURL = 'http://127.0.0.1:3000/products/';
const starterCards = [
  61577, 61578,
];
const action = 'Delete';

// const [outfitItems, outfitItems] = useState(starterCards);

const cardList = starterCards.map((card) => <OutfitCard key={card.id} card={card} action={action} />);

function Outfit() {
  return (
    <ul data-testid="outfit" id={styles.outfit}>
      Outfit
      {cardList}
    </ul>
  );
}

export default Outfit;
