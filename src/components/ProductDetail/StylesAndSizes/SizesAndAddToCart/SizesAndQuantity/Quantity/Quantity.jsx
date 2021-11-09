import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';
import ProductContext from '../../../../../../ProductContext';

function Quantity({
  skusArray, currentSize, currentQuantity, setCurrentQuantity, setCurrentSize,
}) {
  const { currentProduct } = useContext(ProductContext)
  useEffect(() => {
    setCurrentSize('size');
  }, [currentProduct]);
  let totalQuantity;
  let disabledStyle;
  let defaultOption = '';
  if (currentSize === 'size') {
    defaultOption = <option value="quantity">-</option>;
    totalQuantity = 'Quantity';
    disabledStyle = true;
  } else {
    totalQuantity = skusArray.filter((sku) => sku.size === currentSize)[0].quantity;
    totalQuantity = Math.min(totalQuantity, 15);
    disabledStyle = false;
  }
  const options = [];
  for (let i = 1; i <= totalQuantity; i += 1) {
    options.push(<option value={i}>{i}</option>);
  }
  const onSelectChange = (e) => {
    setCurrentQuantity(e.target.value);
  };

  return (
    <div data-testid="quantity" id={styles.quantity}>
      <select
        disabled={disabledStyle}
        aria-label="quantity"
        value={currentQuantity}
        id={styles.quantitySelect}
        onChange={onSelectChange}

      >
        {defaultOption}
        {options}
      </select>
    </div>
  );
}

export default Quantity;

Quantity.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.string.isRequired,
  setCurrentQuantity: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  skusArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
