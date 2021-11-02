import React from 'react';
import AddToBag from './AddToBag/AddToBag';
import SizesAndQuantity from './SizesAndQuantity/SizesAndQuantity';

function SizesAndAddToBag() {
  return (
    <div data-testid="sizesAndAddToBag">
      <SizesAndQuantity />
      <AddToBag />
    </div>
  );
}

export default SizesAndAddToBag;
