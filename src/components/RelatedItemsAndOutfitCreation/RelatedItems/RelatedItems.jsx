import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles.css';
import Card from '../Card/Card';
import sampleProduct from '../../../SampleData/SampleProduct.js';

const productURL = 'http://127.0.0.1:3000/products/';

const starterCards = [

  {
    id: '61581',
    category: 'Jackets',
    name: 'Camo Onesie',
    default_price: '140.00',
    starRating: 'RI1 Star Rating',
    image: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '61583',
    category: 'Accessories',
    name: 'Bright Future Sunglasses',
    default_price: '69.00',
    starRating: 'RI2 Star Rating',
    image: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const dummyIDs = [61588, 61590];

function RelatedItems({ currentProduct, setCurrentProductID }) {
  const action = 'Compare';
  // let workingList = [];

  const [relatedItems, setRelatedItems] = useState(starterCards);

  // const productAPI = (id) => {
  //   axios.get(`${productURL + id}/related`);
  // };

  const relatedAPI = (id) => {
    axios.get(`${productURL + id}/related`)
    .then((data) => {

console.log("It would be awesome if this was an array of numbers: ", data.data);
    // axios.get(productURL + id);
    // .then(
    //   (data) => {
    //     console.log('Array of IDs returned from relatedAPI call: ', data.data);
    //     const workingList = Promise.all(data.data.map((relatedItemID) => {
    //       productAPI(relatedItemID);
    //       console.log('Working List, mapped using productAPI: ', workingList);
    //     }));
    //   },
    // )
  });
  };

  const cardList = dummyIDs.map((card) => <Card key={card.id} card={card} action={action} setCurrentProductID={setCurrentProductID} />);

  useEffect(() => {
    relatedAPI(currentProduct.id);
  }, [currentProduct.id]);

  return (
    <ul data-testid="relatedItems" id={styles.relatedItems}>
      Related Items
      {cardList}
    </ul>
  );
}

export default RelatedItems;
