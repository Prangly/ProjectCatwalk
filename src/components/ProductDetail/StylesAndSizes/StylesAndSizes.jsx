/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';
import styles from './styles.css';
import SizesAndAddToBag from './SizesAndAddToCart/SizesAndAddToCart';

import StarRating from '../../RatingsAndReviews/StarRating/StarRating';

const StylesAndSizes = ({
  productStyles, name, setCurrentStyle, currentStyle, addToOutfit,
}) => {
  const { results, product_id: productID } = productStyles;
  const currentStyleDetails = results[currentStyle];
  const { style_id: styleID } = currentStyleDetails;
  const price = currentStyleDetails.original_price;
  const salePrice = currentStyleDetails.sale_price;
  const styleName = currentStyleDetails.name;
  const purchasePrice = salePrice || price;
  const imgURL = currentStyleDetails.photos[0].url;
  const { skus } = currentStyleDetails;
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
      <StarRating />
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
      <SizesAndAddToBag
        styleID={styleID}
        productID={productID}
        currentStyleName={styleName}
        skus={skus}
        purchasePrice={purchasePrice}
        imgURL={imgURL}
        addToOutfit={addToOutfit}
      />
    </div>
  );
};

export default StylesAndSizes;

StylesAndSizes.propTypes = {
  productStyles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  name: PropTypes.string.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
  addToOutfit: PropTypes.func.isRequired,

};
