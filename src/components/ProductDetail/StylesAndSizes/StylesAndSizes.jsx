import React from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';
import styles from './styles.css';
import SizesAndAddToBag from './SizesAndAddToBag/SizesAndAddToBag';

export default function StylesAndSizes({
  productStyles, name, setCurrentStyle, currentStyle,
}) {
  const { results } = productStyles;
  const price = results[currentStyle].original_price;
  const salePrice = results[currentStyle].sale_price;
  const styleName = results[currentStyle].name;
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
      currentStyle={currentStyle}
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
        <div data-testid="salePrice" id={styles.salePrice}>{salePrice}</div>
      </div>

      <div data-testid="styleContainer">
        {`Style --> ${styleName}`}
        <div id={styles.styleIconContainer} data-testid="styleIconContainer">
          {styleIcons}
        </div>
      </div>
      <SizesAndAddToBag />
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
