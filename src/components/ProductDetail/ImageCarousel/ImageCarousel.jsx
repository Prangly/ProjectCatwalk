/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';
import customIncrement from './customIncrement';

const imageNotFound = 'https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif';
export default function ImageCarousel({
  productStyles, currentStyle, setExpanded, setCurrentImage, currentImage,
}) {
  const sampleStyle = productStyles.results[currentStyle];
  const { name } = sampleStyle;
  const urls = sampleStyle.photos.map((result) => (result.url ? result.url : imageNotFound));
  const onIncrement = (direction) => {
    customIncrement(direction, setCurrentImage, urls, currentImage);
  };

  const alt = urls[currentStyle] === imageNotFound ? 'Image Not Found' : name;
  const leftVis = currentImage === 0 ? 'hidden' : 'visible';
  const rightVis = currentImage === urls.length - 1 ? 'hidden' : 'visible';
  if (currentImage >= urls.length) {
    setCurrentImage(urls.length - 1);
  }
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
        onClick={() => setExpanded(true)}
        onKeyDown={() => setExpanded(true)}
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
  currentImage: PropTypes.number.isRequired,
  setExpanded: PropTypes.func.isRequired,
  setCurrentImage: PropTypes.func.isRequired,

};
