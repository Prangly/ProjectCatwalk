import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BagAndOutfit from './BagAndOutfit/BagAndOutfit';
import SizesAndQuantity from './SizesAndQuantity/SizesAndQuantity';

// MIGHT THIS ONLY NEED SKUS AND NAME?
function SizesAndAddToBag({
  currentStyleName, skus, productID, styleID, purchasePrice,
}) {
  const [currentSize, setCurrentSize] = useState('size');
  const [currentQuantity, setCurrentQuantity] = useState('quantity');
  return (
    <div data-testid="sizesAndAddToBag">
      <SizesAndQuantity
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentStyleName={currentStyleName}
        skus={skus}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
      />
      <BagAndOutfit
        productID={productID}
        styleID={styleID}
        currentSize={currentSize}
        currentQuantity={currentQuantity}
        currentStyleName={currentStyleName}
        purchasePrice={purchasePrice}
      />
    </div>
  );
}

export default SizesAndAddToBag;

SizesAndAddToBag.propTypes = {
  currentStyleName: PropTypes.string.isRequired,
  skus: PropTypes.arrayOf(PropTypes.object).isRequired,
  productID: PropTypes.string.isRequired,
  styleID: PropTypes.number.isRequired,
  purchasePrice: PropTypes.string.isRequired,
};
