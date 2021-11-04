import React from 'react';
import styles from './styles.css';
import RelatedItems from './RelatedItems/RelatedItems';
import Outfit from './Outfit/Outfit';

// eslint-disable-next-line react/prop-types
const RandOC = ({ currentProduct }) => (
  <div data-testid="rAndOC" id={styles.rAndOC}>
    <h1>Related Items and Outfit Creation</h1>
    <RelatedItems currentProduct={currentProduct} />
    {/* <Outfit /> */}
  </div>
);

export default RandOC;
