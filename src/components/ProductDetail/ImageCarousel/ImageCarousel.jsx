import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ImageCarousel({ product }) {
  return (
    <div id={styles.imageCarousel} data-testid="imageCarousel">
      {product.product_id}
    </div>
  );
}

ImageCarousel.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,

};
