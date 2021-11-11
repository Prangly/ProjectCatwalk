import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.css';

function AddToOutfit({
  productID, addToOutfit,
}) {
  const onClick = () => {
    addToOutfit(productID);
  };

  return (
    <div data-testid="addToOutfit" id={styles.addToOutfit}>
      <button
        type="button"
        id={styles.addToOutfitButton}
        className="ourButton"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  );
}

export default AddToOutfit;

AddToOutfit.propTypes = {
  productID: PropTypes.string.isRequired,
  addToOutfit: PropTypes.func.isRequired,

};
