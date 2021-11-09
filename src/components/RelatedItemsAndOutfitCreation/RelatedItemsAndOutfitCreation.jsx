/* eslint-disable import/no-named-as-default */
import React from 'react';
import styles from './styles.css';
import RelatedItems from './RelatedItems/RelatedItems';
import Outfit from './Outfit/Outfit';

// eslint-disable-next-line react/prop-types
const RandOC = ({ currentProduct, setCurrentProductID, currentOutfit, removeFromOutfit }) => (
  <div data-testid="rAndOC" id={styles.rAndOC}>
    <h1>Related Items and Outfit Creation</h1>
    <RelatedItems currentProduct={currentProduct} setCurrentProductID={setCurrentProductID} />
    <Outfit currentOutfit={currentOutfit} removeFromOutfit={removeFromOutfit} />
  </div>
);

export default RandOC;
