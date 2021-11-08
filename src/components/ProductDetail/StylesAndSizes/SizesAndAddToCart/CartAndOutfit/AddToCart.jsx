import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../styles.css';

function AddToCart({
  currentSize, currentQuantity,
}) {
  const [alertMessage, setAlertMessage] = useState('');

  const postToCart = (skuId, count) => {
    console.log(skuId, count);
  };
  const onClick = (id, count) => {
    if (currentSize === 'size') {
      setAlertMessage('Please Select Size');
    } else if (currentQuantity === 'quantity') {
      setAlertMessage('Please Select Quantity');
    } else {
      postToCart(id, count);
      setAlertMessage('');
    }
  };

  return (
    <div data-testid="addToCart" id={styles.addToCart}>
      <button
        type="button"
        id={styles.addToCartButton}
        onClick={() => {
          onClick('555', 1);
        }}
      >
        Add To Cart
      </button>
      <div data-testid="alertMessage" id={styles.alertMessage}>{alertMessage}</div>

    </div>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.string.isRequired,
};
