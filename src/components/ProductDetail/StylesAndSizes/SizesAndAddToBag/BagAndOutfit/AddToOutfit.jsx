import React from 'react';
import styles from '../styles.css';

function AddToOutfit() {
  return (
    <div data-testid="addToOutfit" id={styles.addToOutfit}>
      <button
        type="button"
        id={styles.addToOutfitButton}
        onClick={() => { console.log('outfit') }}
      >
        *
      </button>
    </div>
  );
}

export default AddToOutfit;
