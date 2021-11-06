import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartAndOutfit from './CartAndOutfit/BagAndOutfit';
import SizesAndQuantity from './SizesAndQuantity/SizesAndQuantity';
import styles from './styles.css';

// MIGHT THIS ONLY NEED SKUS AND NAME?
function SizesAndAddToCart({
  currentStyleName, skus, productID, styleID, purchasePrice, addToOutfit, imgURL,
}) {
  const [currentSize, setCurrentSize] = useState('size');
  const [currentQuantity, setCurrentQuantity] = useState('quantity');
  return (
    <div data-testid="sizesAndAddToCart" id={styles.sizesAndAddToCart}>
      <SizesAndQuantity
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentStyleName={currentStyleName}
        skus={skus}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
      />
      <CartAndOutfit
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        currentStyleName={currentStyleName}
        purchasePrice={purchasePrice}
        addToOutfit={addToOutfit}
        imgURL={imgURL}
      />
    </div>
  );
}

export default SizesAndAddToCart;

SizesAndAddToCart.propTypes = {
  currentStyleName: PropTypes.string.isRequired,
  skus: PropTypes.shape({}).isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,
  addToOutfit: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,

};
