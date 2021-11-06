import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles.css';

function AddToCart({
  currentSize, currentQuantity, productID, styleID, purchasePrice,
}) {
  return (
    <div data-testid="addToCart" id={styles.addToCart}>
      <button
        type="button"
        id={styles.addToCartButton}
        onClick={() => {
          console.log({
            currentSize, currentQuantity, productID, styleID, purchasePrice,
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,

};
