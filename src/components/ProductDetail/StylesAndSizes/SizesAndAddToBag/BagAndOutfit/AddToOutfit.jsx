import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.css';

function AddToOutfit({
  currentSize, currentQuantity, productID, styleID,
}) {
  return (
    <div data-testid="addToOutfit" id={styles.addToOutfit}>
      <button
        type="button"
        id={styles.addToOutfitButton}
        onClick={() => {
          console.log({
            currentSize, currentQuantity, productID, styleID,
          });
        }}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  );
}

export default AddToOutfit;

AddToOutfit.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
};
