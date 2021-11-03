import React from 'react';
import PropTypes from 'prop-types';
import AddToBag from './AddToBag';
import AddToOutfit from './AddToOutfit';
import styles from '../styles.css';

function BagAndOutfit({
  currentSize, currentQuantity, productID, styleID, purchasePrice, addToOutfit, imgURL,
}) {
  return (
    <div data-testid="bagAndOutfit" id={styles.bagAndOutfit}>
      <AddToBag
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        purchasePrice={purchasePrice}
      />
      <AddToOutfit
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        addToOutfit={addToOutfit}
        imgURL={imgURL}
      />
    </div>
  );
}

export default BagAndOutfit;

BagAndOutfit.propTypes = {
  currentSize: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,
  addToOutfit: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,
};
