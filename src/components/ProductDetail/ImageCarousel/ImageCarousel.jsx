import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ImageCarousel({ productStyles, currentStyle }) {
  const sampleStyle = productStyles.results[currentStyle];
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
    <div
      id={styles.imageCarousel}
      data-testid="imageCarousel"
    >
      <button
        data-testid="prevImageButton"
        type="button"
        onClick={() => onIncrement('down')}
        onKeyDown={() => onIncrement('down')}
        id={styles.leftBar}
        className={styles.scrollBar}
      >
        &lt;
      </button>

      <img
        data-testid="carouselImage"
        className={styles.bigImage}
        alt={name}
        src={urls[currentImage]}
      />

      <button
        data-testid="nextImageButton"
        type="button"
        onClick={() => onIncrement('up')}
        onKeyDown={() => onIncrement('up')}
        id={styles.rightBar}
        className={styles.scrollBar}
      >
        &gt;
      </button>

    </div>
  );
}

ImageCarousel.propTypes = {
  productStyles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentStyle: PropTypes.number.isRequired,

};
