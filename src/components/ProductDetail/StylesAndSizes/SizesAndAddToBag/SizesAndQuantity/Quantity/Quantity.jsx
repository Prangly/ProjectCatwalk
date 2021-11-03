import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';

function Quantity({
  skusArray, currentSize, currentQuantity, setCurrentQuantity,
}) {
  let totalQuantity;
  let disabledStyle;
  let text;
  if (currentSize === 'size') {
    totalQuantity = 'Quantity';
    disabledStyle = true;
    text = '-';
  } else {
    totalQuantity = skusArray.filter((sku) => sku.size === currentSize)[0].quantity;
    totalQuantity = Math.min(totalQuantity, 15);
    disabledStyle = false;
    text = 'Quantity';
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
        <option value="quantity">{text}</option>
        {options}
      </select>
    </div>
  );
}

export default Quantity;

Quantity.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  setCurrentQuantity: PropTypes.func.isRequired,
  skusArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
