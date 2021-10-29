import React from 'react';
import styles from '../styles.css';
import Card from '../Card/Card';

export default function Outfit() {
  return (
    <div data-testid="outfit" id={styles.outfit}>
      Outfit
      <Card />
    </div>
  );
}
