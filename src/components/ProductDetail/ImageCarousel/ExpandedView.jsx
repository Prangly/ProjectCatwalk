import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';

const imageNotFound = 'https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif';
export default function ExpandedView({ productStyles, currentStyle, setExpanded, currentImage, setCurrentImage }) {
  const sampleStyle = productStyles.results[currentStyle];
  const { name } = sampleStyle;
  const urls = sampleStyle.photos.map((result) => (result.url ? result.url : imageNotFound));
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

    <div id={styles.expandedView} data-testid="expandedCarousel">


      <button
        type="button"
        onClick={() => onIncrement('down')}
        onKeyDown={() => onIncrement('down')}
        id={styles.expandedLeftBar}
        className={styles.expandedScrollBar}
        data-testid="expandedPrevImageButton"
        style={{
          visibility: leftVis,
        }}
      >
        &lt;
      </button>

      <img
        data-testid="expandedCarouselImage"
        className={styles.expandedCarouselImage}
        alt={alt}
        src={urls[currentImage]}
      />

      <button
        type="button"
        onClick={() => onIncrement('up')}
        onKeyDown={() => onIncrement('up')}
        id={styles.expandedRightBar}
        className={styles.expandedScrollBar}
        data-testid="expandedNextImageButton"
        style={{
          visibility: rightVis,
        }}

      >
        &gt;
      </button>
      <button
        type="button"
        id={styles.closeExpandedView}
        data-testid="closeExpandedView"
        onClick={() => setExpanded(false)}
      >
        x
      </button>
    </div>
  );
}

ExpandedView.propTypes = {
  productStyles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentStyle: PropTypes.number.isRequired,
  currentImage: PropTypes.number.isRequired,
  setExpanded: PropTypes.func.isRequired,
  setCurrentImage: PropTypes.func.isRequired,

};
