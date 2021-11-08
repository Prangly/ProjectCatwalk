import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import Sizes from './Sizes/Sizes';
import Quantity from './Quantity/Quantity';

function SizesAndQuantity({
  skus, currentSize, setCurrentSize, currentQuantity, setCurrentQuantity,
}) {
  let skusArray = Object.keys(skus);
  skusArray = skusArray.map((sku) => skus[sku]);

  return (
    <div data-testid="sizesAndQuantity" id={styles.sizesAndQuantity}>
      <Sizes skusArray={skusArray} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <Quantity
        skusArray={skusArray}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
      />
    </div>
  );
}

export default SizesAndQuantity;

SizesAndQuantity.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  setCurrentQuantity: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  skus: PropTypes.arrayOf(PropTypes.object).isRequired,
};