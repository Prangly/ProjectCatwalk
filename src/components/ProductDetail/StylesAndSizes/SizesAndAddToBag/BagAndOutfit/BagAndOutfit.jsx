import React from 'react';
import AddToBag from './AddToBag';
import AddToOutfit from './AddToOutfit';
import styles from './styles.css';

function BagAndOutfit() {
  return (
    <div data-testid="bagAndOutfit" id={styles.bagAndOutfit}>
      <AddToBag />
      <AddToOutfit />
    </div>
  );
}

export default BagAndOutfit;
