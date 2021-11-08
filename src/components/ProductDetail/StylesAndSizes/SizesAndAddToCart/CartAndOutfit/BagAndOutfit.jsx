import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import AddToOutfit from './AddToOutfit';
import styles from '../styles.css';

function CartAndOutfit({
  currentSize, currentQuantity, productID, styleID, purchasePrice, addToOutfit, imgURL,
}) {
  return (
    <div data-testid="bagAndOutfit" id={styles.bagAndOutfit}>
      <AddToCart
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        purchasePrice={purchasePrice}
      />
      <AddToOutfit
        addToOutfit={addToOutfit}
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        imgURL={imgURL}
      />
    </div>
  );
}

export default CartAndOutfit;

CartAndOutfit.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,
  addToOutfit: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,
};
