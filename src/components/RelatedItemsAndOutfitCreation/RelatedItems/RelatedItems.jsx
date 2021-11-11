import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import RelatedCard from '../RelatedCard/RelatedCard';

const productURL = '/products/';
const starterCards = [
  61581, 61583,
  // {
  //   id: '61581',
  //   category: 'Jackets',
  //   name: 'Camo Onesie',
  //   default_price: '140.00',
  //   starRating: 'RI1 Star Rating',
  //   image: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  // },
  // {
  //   id: '61583',
  //   category: 'Accessories',
  //   name: 'Bright Future Sunglasses',
  //   default_price: '69.00',
  //   starRating: 'RI2 Star Rating',
  //   image: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  // },
];

function RelatedItems({ currentProduct, setCurrentProductID }) {
  const action = 'Compare';

  const [relatedItems, setRelatedItems] = useState(starterCards);

  const relatedAPI = (id) => {
    axios.get(`${productURL + id}/related`)
      .then((data) => {
        setRelatedItems(data.data);
      });
  };

  // eslint-disable-next-line max-len
  const cardList = relatedItems.map((card) => <RelatedCard key={card} card={card} currentProduct={currentProduct} action={action} setCurrentProductID={setCurrentProductID} />);

  if (currentProduct) {
    useEffect(() => {
      relatedAPI(currentProduct.id);
    }, [currentProduct.id]);
  }

  if (cardList) {
    return (
      <ul data-testid="relatedItems" className="ourContainer" id={styles.relatedItems}>
        Related Items
        {cardList}
      </ul>
    );
  }
}

// RelatedItems.propTypes = {
//   currentProduct: PropTypes.shape({
//     id: PropTypes.string,
//   }),
//   setCurrentProductID: PropTypes.func,
// };

RelatedItems.propTypes = {
  currentProduct: PropTypes.number,
  setCurrentProductID: PropTypes.func,
}.isRequired;

export default RelatedItems;
