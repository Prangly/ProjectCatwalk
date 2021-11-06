import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.css';

function AddToOutfit({
  currentSize, currentQuantity, productID, styleID, addToOutfit, imgURL,
}) {
  const onClick = () => {
    if (currentSize === 'size') {
      alert('Please Select Size');
    } else if (currentQuantity === 'quantity') {
      alert('Please Select Quantity');
    } else {
      addToOutfit({
        currentSize, currentQuantity, productID, styleID, imgURL,
      });
    }
  };

  return (
    <div data-testid="addToOutfit" id={styles.addToOutfit}>
      <button
        type="button"
        id={styles.addToOutfitButton}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  );
}

export default AddToOutfit;

AddToOutfit.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  addToOutfit: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,

};
