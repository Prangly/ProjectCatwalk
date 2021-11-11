import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import RelatedCard from '../RelatedCard/RelatedCard';

const productURL = 'http://127.0.0.1:3000/products/';
const starterCards = [
  61581, 61583,
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
      <ul data-testid="relatedItems" id={styles.relatedItems}>
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
