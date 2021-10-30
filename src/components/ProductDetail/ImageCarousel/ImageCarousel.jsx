import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ImageCarousel({ product }) {
  const sampleStyle = product.results[0];

  const urls = sampleStyle.photos.map((result) => result.url);

  return (
    <div id={styles.imageCarousel} data-testid="imageCarousel">
      <img className={styles.bigImage} alt={sampleStyle.name} src={urls[0]} />
    </div>
  );
}

ImageCarousel.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,

};
