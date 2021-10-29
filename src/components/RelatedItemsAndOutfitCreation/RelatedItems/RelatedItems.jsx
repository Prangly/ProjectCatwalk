import React from 'react';
import styles from '../styles.css';
import Card from '../Card/Card';

export default function RelatedItems() {
  return (
    <div data-testid="relatedItems" id={styles.relatedItems}>
      Related Items
      <Card />
    </div>
  );
}
