/* eslint-disable import/no-named-as-default */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';
import styles from './styles.css';
import SizesAndAddToCart from './SizesAndAddToCart/SizesAndAddToCart';
import ProductContext from '../../../ProductContext';
import ReviewStarRating from '../../RatingsAndReviews/StarRating/ReviewStarRating';
import ShareProduct from './ShareProduct';

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
  const { skus } = currentStyleDetails;
  const { currentProductAvgRating } = useContext(ProductContext);
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
      <div data-testid="nameRatingPrice" id={styles.nameRatingPrice}>
        <h1 data-testid="productName" id={styles.productName}>{name}</h1>

        <ReviewStarRating rating={currentProductAvgRating} />
        <ShareProduct />
        <div id={styles.price}>
          <span
            data-testid="productPrice"
            className={styles.price}
            id={styles.productPrice}
            style={saleStyle}
          >
            {price}
          </span>
          <div data-testid="salePrice" className={styles.price} id={styles.salePrice}>{salePrice}</div>
        </div>
      </div>

      <div data-testid="styleContainer" id={styles.styleContainer}>
        <div data-testid="styleLine1" className={styles.styleLine} />
        <div id={styles.styleIconContainer} data-testid="styleIconContainer">
          {styleIcons}
        </div>
        <span data-testid="styleName" id={styles.styleName}>
          {`Style: ${styleName}`}
        </span>
        {/* <div data-testid="styleLine2" className={styles.styleLine} /> */}
      </div>
      <SizesAndAddToCart
        styleID={styleID}
        productID={productID}
        currentStyleName={styleName}
        skus={skus}
        purchasePrice={purchasePrice}
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
