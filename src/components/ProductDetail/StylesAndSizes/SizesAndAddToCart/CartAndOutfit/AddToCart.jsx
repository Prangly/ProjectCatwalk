import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles.css';

const cartUrl = 'http://127.0.0.1:3000/cart';
function AddToCart({
  currentSize, currentQuantity, currentSkuId,
}) {
  const [alertMessage, setAlertMessage] = useState('');

  const postToCart = (skuId, count) => {
    console.log(skuId, count);
  };

  const cartAPI = (skuId, count) => {
    axios.post(cartUrl, { skuId, count })
      .then((data) => {
        console.log(data);
      });
  };

  const onClick = (id, count) => {
    if (currentSize === 'size') {
      setAlertMessage('Please Select Size');
    } else if (currentQuantity === 'quantity') {
      setAlertMessage('Please Select Quantity');
    } else {
      cartAPI(id, count);
      setAlertMessage('');
    }
  };

  return (
    <div data-testid="addToCart" id={styles.addToCart}>
      <button
        type="button"
        id={styles.addToCartButton}
        onClick={() => {
          onClick(currentSkuId, currentQuantity);
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
  currentQuantity: PropTypes.number.isRequired,
  currentSkuId: PropTypes.string.isRequired,
};
