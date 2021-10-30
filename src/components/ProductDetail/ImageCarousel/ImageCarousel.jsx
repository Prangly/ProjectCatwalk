import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ImageCarousel({ product }) {
  const sampleStyle = product.results[0];
  const { name } = sampleStyle;
  const urls = sampleStyle.photos.map((result) => result.url);
  const [currentImage, setCurrentImage] = useState(0);

  const onIncrement = (direction) => {
    if (direction === 'up' && currentImage < urls.length - 1) {
      setCurrentImage(currentImage + 1);
    } else if (direction === 'down' && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div id={styles.imageCarousel} data-testid="imageCarousel">
      <button type="button" onClick={() => onIncrement('down')} onKeyDown={() => onIncrement('down')} id={styles.leftBar} className={styles.scrollBar}> &lt;</button>

      <img className={styles.bigImage} alt={name} src={urls[currentImage]} />

      <button type="button" onClick={() => onIncrement('up')} onKeyDown={() => onIncrement('up')} id={styles.rightBar} className={styles.scrollBar}> &gt; </button>

    </div>
  );
}

ImageCarousel.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,

};
