import React from 'react';
import styles from '../styles.css';
import Card from '../Card/Card';

const cards = [
  {
    id: '61575',
    category: 'Jackets',
    name: 'Camo Onesie',
    default_price: '140.00',
    starRating: 'RI1 Star Rating',
    image: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '61576',
    category: 'Accessories',
    name: 'Bright Future Sunglasses',
    default_price: '69.00',
    starRating: 'RI2 Star Rating',
    image: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];
const action = 'Compare';
const cardList = cards.map((card) => <Card key={card.id} card={card} action={action} />);

function RelatedItems({ currentProduct }) {
  console.log(currentProduct);
  return (
    <ul data-testid="relatedItems" id={styles.relatedItems}>
      Related Items
      {cardList}
    </ul>
  );
}

export default RelatedItems;
