import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.css';

function AddToOutfit({
  currentSize, currentQuantity, productID, styleID, addToOutfit, imgURL,
}) {
  const [alertMessage, setAlertMessage] = useState('');
  const onClick = () => {
    if (currentSize === 'size') {
      setAlertMessage('Please Select Size');
    } else if (currentQuantity === 'quantity') {
      setAlertMessage('Please Select Quantity');
    } else {
      addToOutfit({
        currentSize, currentQuantity, productID, styleID, imgURL,
      });
      setAlertMessage('');
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
      <div data-testid="alertMessage" id={styles.alertMessage}>{alertMessage}</div>
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
