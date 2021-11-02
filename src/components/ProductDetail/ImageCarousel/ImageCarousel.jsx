import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';

const imageNotFound = 'https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif';
export default function ImageCarousel({ productStyles, currentStyle }) {
  const sampleStyle = productStyles.results[currentStyle];
  const { name } = sampleStyle;
  const urls = sampleStyle.photos.map((result) => (result.url ? result.url : imageNotFound));
  const [currentImage, setCurrentImage] = useState(0);
  const onIncrement = (direction) => {
    if (direction === 'up' && currentImage < urls.length - 1) {
      setCurrentImage(currentImage + 1);
    } else if (direction === 'down' && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const alt = urls[currentStyle] === imageNotFound ? 'Image Not Found' : name;
  const leftVis = currentImage === 0 ? 'hidden' : 'visible';
  const rightVis = currentImage === urls.length - 1 ? 'hidden' : 'visible';

  return (
    <div id={styles.imageCarousel} data-testid="imageCarousel">
      <button
        type="button"
        onClick={() => onIncrement('down')}
        onKeyDown={() => onIncrement('down')}
        id={styles.leftBar}
        className={styles.scrollBar}
        data-testid="prevImageButton"
        style={{
          visibility: leftVis,
        }}
      >
        &lt;
      </button>

      <img
        data-testid="carouselImage"
        className={styles.bigImage}
        alt={alt}
        src={urls[currentImage]}
      />

      <button
        type="button"
        onClick={() => onIncrement('up')}
        onKeyDown={() => onIncrement('up')}
        id={styles.rightBar}
        className={styles.scrollBar}
        data-testid="nextImageButton"
        style={{
          visibility: rightVis,
        }}

      >
        &gt;
      </button>
      <ThumbnailGallery urls={urls} currentImage={currentImage} setCurrentImage={setCurrentImage} />

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
