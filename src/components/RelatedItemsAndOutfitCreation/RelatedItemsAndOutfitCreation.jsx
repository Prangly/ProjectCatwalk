import React from 'react';
import styles from './styles.css';
import RelatedItems from './RelatedItems/RelatedItems';
import Outfit from './Outfit/Outfit';

const RandOC = () => (
  <div data-testid="rAndOC" id={styles.relatedItems}>
    <h1>Related Items and Outfit Creation</h1>
    <RelatedItems />
    <Outfit />
  </div>
);

export default RandOC;