import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import OutfitCard from '../OutfitCard/OutfitCard';

const productURL = 'http://127.0.0.1:3000/products/';
const starterCards = [
  61577, 61578,
];

// const [outfitItems, outfitItems] = useState(starterCards);
function Outfit({ removeFromOutfit }) {
  const action = 'Delete';
  // eslint-disable-next-line max-len
  if (starterCards) {
    // eslint-disable-next-line max-len
    const cardList = starterCards.map((card) => <OutfitCard key={card.id} card={card} action={action} removeFromOutfit={removeFromOutfit} />);
    return (
      <ul data-testid="outfit" id={styles.outfit}>
        Your Outfit
        {cardList}
        {starterCards.length === 0
        && (
        <h4>
          There are no items in Your Outfit.
        </h4>
        )}
      </ul>
    );
  }
  return (
    <div data-testid="outfit" id={styles.outfit}>
      You have no items in your outfit.
    </div>
  );
}
Outfit.propTypes = {
  removeFromOutfit: PropTypes.isRequired,
};

export default Outfit;
