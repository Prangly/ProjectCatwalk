import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import OutfitCard from '../OutfitCard/OutfitCard';

const productURL = 'http://127.0.0.1:3000/products/';
const outfitIDs = [
  61577, 61578,
];
function Outfit({ removeFromOutfit }) {
  const action = 'Delete';
  // eslint-disable-next-line max-len
  const cardList = outfitIDs.map((card) => <OutfitCard key={card.id} card={card} action={action} removeFromOutfit={removeFromOutfit} />);
  return (
    <ul data-testid="outfit" id={styles.outfit}>
      Your Outfit
      {cardList}
      {outfitIDs.length === 0
        && (
        <h4>
          There are no items in Your Outfit.
        </h4>
        )}
    </ul>
  );
}
Outfit.propTypes = {
  removeFromOutfit: PropTypes.isRequired,
};

export default Outfit;
