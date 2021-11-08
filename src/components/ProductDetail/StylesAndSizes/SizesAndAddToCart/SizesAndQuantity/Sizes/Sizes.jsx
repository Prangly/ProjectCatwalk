import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';

function Sizes({ skusArray, setCurrentSize, currentSize }) {
  const options = skusArray.map((sku) => {
    if (sku.quantity) {
      return <option key={sku.size} value={sku.size}>{sku.size}</option>;
    }
    return undefined;
  });

  const onSelectChange = (e) => {
    setCurrentSize(e.target.value);
  };

  return (
    <div data-testid="sizes" id={styles.sizes}>
      <select
        aria-label="sizes"
        value={currentSize}
        id={styles.sizeSelect}
        onChange={onSelectChange}
      >
        <option value="size">Size</option>
        {options}
      </select>
    </div>
  );
}

export default Sizes;

Sizes.propTypes = {
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  skusArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
