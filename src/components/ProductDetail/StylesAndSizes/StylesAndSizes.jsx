import React from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';
import styles from './styles.css';

export default function StylesAndSizes({ productStyles, name, setCurrentStyle }) {
  const { results } = productStyles;

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
};
