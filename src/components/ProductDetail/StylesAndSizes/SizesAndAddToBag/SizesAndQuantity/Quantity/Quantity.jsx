import React from 'react';
import styles from '../../styles.css';

function Quantity() {
  return (
    <div data-testid="quantity" id={styles.quantity}>
      <select
        aria-label="quantity"
        value="quantity"
        id={styles.quantitySelect}
      >
        <option value="quantity">Quantity</option>
        <option value="1">1</option>
      </select>
    </div>
  );
}

export default Quantity;
