import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles.css';
import Card from '../Card/Card';
import sampleProduct from '../../../SampleData/SampleProduct.js';

const productURL = 'http://127.0.0.1:3000/products/';

const cards =[

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

function RelatedItems({ currentProduct }) {
  const action = 'Compare';
  const cardList = cards.map((card) => <Card key={card.id} card={card} action={action} />);

  console.log('Current product ID, Line 33: ', currentProduct.id);

  const [currentProductID, setCurrentProductID] = useState(currentProduct.id);
  const [relatedItems, setRelatedItems] = useState([]);

  // console.log('Current product ID from line 38: ', currentProductID);
  // console.log('Related items from line 39: ', relatedItems);

  const relatedAPI = (id) => {
    axios.get(`${productURL + id  }/related`)
      .then((data) => {
        console.log('Related items ids retrieved from api, Line 44: ', data);
      //   setCurrentProduct(data.data);
      console.log('Array of related items just id numbers: ', data.data);
      console.log('Array of related items objects: ', data.data.map((item) => {
        productAPI(item);
      }
      )
      );
      }
      )

    .then(setRelatedItems(data.data.map((item) => {
      productAPI(item);
    }))
  };


  // const [currentProduct, setCurrentProduct] = useState(sampleProduct);
  const productAPI = (id) => {
    axios.get(productURL + id)
      .then((data) => {
        console.log('Related items objects retrieved from api: ', data)
          .then(console.log('Hello from state'));
      //   setCurrentProduct(data.data);
      });
  };

  useEffect(() => {
    relatedAPI(currentProductID);
  }, [currentProductID]);

  console.log('Product API: ', productAPI);
  console.log('Related Items Objects from state, Line 71: ', relatedItems);
  console.log('Hello from state');
  return (
    <ul data-testid="relatedItems" id={styles.relatedItems}>
      Related Items
      {cardList}
    </ul>
  );
}

export default RelatedItems;
