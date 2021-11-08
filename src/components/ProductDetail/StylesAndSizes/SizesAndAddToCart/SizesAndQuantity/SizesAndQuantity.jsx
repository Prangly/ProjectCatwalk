import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import Sizes from './Sizes/Sizes';
import Quantity from './Quantity/Quantity';

function SizesAndQuantity({
  skus, currentSize, setCurrentSize, currentQuantity, setCurrentQuantity,
}) {
  const skuIds = Object.keys(skus);
  const skusArray = skuIds.map((sku) => skus[sku]);
  skusArray.forEach((sku, i) => {
    sku.sku_id = skuIds[i];
  })

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
  currentQuantity: PropTypes.string.isRequired,
  setCurrentQuantity: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  skus: PropTypes.shape({}).isRequired,
};
