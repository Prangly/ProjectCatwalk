import React from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';
import styles from './styles.css';

export default function StylesAndSizes({
  productStyles, name, setCurrentStyle, currentStyle,
}) {
  const { results } = productStyles;
  console.log(results)
  const price = results[currentStyle].original_price;
  const salePrice = results[currentStyle].sale_price;
  const saleStyle = salePrice
    ? {
      textDecoration: 'line-through red',
      opacity: '0.5',
    }
    : {
      textDecoration: 'none',

    };
  const styleIcons = results.map((style, i) => (
    <StyleIcon
      setCurrentStyle={setCurrentStyle}
      key={style.style_id}
      style={style}
      i={i}
    />
  ));

  return (
    <div id={styles.stylesAndSizes} data-testid="stylesAndSizes">
      <h1 data-testid="productName" id={styles.productName}>{name}</h1>
      <div id={styles.price}>

        <span
          data-testid="productPrice"
          id={styles.productPrice}
          style={saleStyle}
        >
          {price}
        </span>
        <span data-testid="salePrice" id={styles.salePrice}>{salePrice}</span>
      </div>
      <div id={styles.styleIconContainer} data-testid="styleIconContainer">
        {styleIcons}
      </div>
    </div>
  );
}

StylesAndSizes.propTypes = {
  productStyles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  name: PropTypes.string.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
};
