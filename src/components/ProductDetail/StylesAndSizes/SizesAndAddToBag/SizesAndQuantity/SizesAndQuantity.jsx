import React from 'react';
import styles from '../styles.css'
import Sizes from './Sizes/Sizes'
import Quantity from './Quantity/Quantity'

function SizesAndQuantity() {
  return (
    <div data-testid="sizesAndQuantity" id={styles.sizesAndQuantity}>
      <Sizes />
      <Quantity />
    </div>
  );
}

export default SizesAndQuantity;
