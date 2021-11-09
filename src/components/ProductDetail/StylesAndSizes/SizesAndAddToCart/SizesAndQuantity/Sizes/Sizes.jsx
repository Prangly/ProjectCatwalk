import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';

function Sizes({ skusArray, setCurrentSize, currentSize, setCurrentSkuId }) {
  const options = skusArray.map((sku) => {
    if (sku.quantity) {
      return <option key={sku.size} value={sku.size}>{sku.size}</option>;
    }
    return undefined;
  });
  let defaultOption = <option value="size">Select Size</option>;
  let disabledStyle = false;
  if (!options.length) {
    defaultOption = <option value="outOfStock">Out Of Stock</option>;
    disabledStyle = true;
  }
  const onSelectChange = (e) => {
    setCurrentSize(e.target.value);
  };

  let currentSku;
  useEffect(() => {
    if (currentSize !== 'size') {
      currentSku = skusArray.filter((sku) => sku.size === currentSize)[0].sku_id;
      setCurrentSkuId(currentSku);
    }
  }, [currentSize]);

  return (
    <div data-testid="sizes" id={styles.sizes}>
      <select
        disabled={disabledStyle}
        aria-label="sizes"
        value={currentSize}
        id={styles.sizeSelect}
        onChange={onSelectChange}
      >
        {defaultOption}
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
  setCurrentSkuId: PropTypes.func.isRequired,
};
