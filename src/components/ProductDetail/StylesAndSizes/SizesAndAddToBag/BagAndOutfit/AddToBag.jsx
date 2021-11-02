import React from 'react';
import styles from '../styles.css';

function AddToBag() {
  return (
    <div data-testid="addToBag" id={styles.addToBag}>
      <button
        type="button"
        id={styles.addToBagButton}
        onClick={() => { console.log('bag') }}
      >
        Add To Bag
      </button>
    </div>
  );
}

export default AddToBag;
