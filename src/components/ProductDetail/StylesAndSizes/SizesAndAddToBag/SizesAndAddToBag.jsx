import React from 'react';
import BagAndOutfit from './BagAndOutfit/BagAndOutfit';
import SizesAndQuantity from './SizesAndQuantity/SizesAndQuantity';
import styles from './styles.css'
function SizesAndAddToBag() {
  return (
    <div data-testid="sizesAndAddToBag">
      <SizesAndQuantity />
      <BagAndOutfit />
    </div>
  );
}

export default SizesAndAddToBag;
