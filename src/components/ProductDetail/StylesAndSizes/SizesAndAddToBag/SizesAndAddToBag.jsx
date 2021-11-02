import React from 'react';
import BagAndOutfit from './BagAndOutfit/BagAndOutfit';
import SizesAndQuantity from './SizesAndQuantity/SizesAndQuantity';

function SizesAndAddToBag() {
  return (
    <div data-testid="sizesAndAddToBag">
      <SizesAndQuantity />
      <BagAndOutfit />
    </div>
  );
}

export default SizesAndAddToBag;
