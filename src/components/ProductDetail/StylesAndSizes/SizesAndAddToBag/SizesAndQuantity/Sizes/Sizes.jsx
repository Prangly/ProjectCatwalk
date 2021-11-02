import React from 'react';
import styles from '../../styles.css';

function Sizes() {
  return (
    <div data-testid="sizes" id={styles.sizes}>
      <select
        aria-label="sizes"
        value="size"
        id={styles.sizeSelect}
      >
        <option value="size">Size</option>
        <option value="small">Small</option>
      </select>
    </div>
  );
}

export default Sizes;
