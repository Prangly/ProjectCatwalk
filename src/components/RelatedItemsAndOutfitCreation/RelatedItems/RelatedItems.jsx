import React from 'react';
import styles from '../styles.css';
import Card from '../Card/Card';

const cards = [
  {
    id: '001',
    category: 'RI1 Category',
    name: 'RI1 Name',
    price: 'RI1 Price',
    starRating: 'RI1 Star Rating',
    image: 'RI1 Image',
  },
  {
    id: '002',
    category: 'RI2 Category',
    name: 'RI2 Name',
    price: 'RI2 Price',
    starRating: 'RI2 Star Rating',
    image: 'RI2 Image',
  },
];

function RelatedItems() {
  console.log(`The cards array has ${cards.length} elements`);
  return (
    <ul data-testid="relatedItems" id={styles.relatedItems}>
      Related Items
      {cards.map((card) => <Card key={card.id.toString()} card={card} />)}
    </ul>
  );
}

export default RelatedItems;
