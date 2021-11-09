import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import OutfitCard from '../OutfitCard/OutfitCard';

function Outfit({ removeFromOutfit, currentOutfit }) {
  const action = 'Delete';
  // eslint-disable-next-line max-len
  const cardList = currentOutfit.map((card) => <OutfitCard key={card.id} card={card} action={action} removeFromOutfit={removeFromOutfit} />);
  return (
    <ul data-testid="outfit" id={styles.outfit}>
      Your Outfit
      {cardList}
      {currentOutfit.length === 0
        && (
        <h4>
          There are no items in Your Outfit.
        </h4>
        )}
    </ul>
  );
}
Outfit.propTypes = {
  currentOutfit: PropTypes.shape({
  }),
  removeFromOutfit: PropTypes.func.isRequired,
}.isRequired;

export default Outfit;
