import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles.css';

function AddToBag({
  currentSize, currentQuantity, productID, styleID, purchasePrice,
}) {
  return (
    <div data-testid="addToBag" id={styles.addToBag}>
      <button
        type="button"
        id={styles.addToBagButton}
        onClick={() => {
          console.log({
            currentSize, currentQuantity, productID, styleID, purchasePrice,
          });
        }}
      >
        Add To Bag
      </button>
    </div>
  );
}

export default AddToBag;

AddToBag.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,

};
