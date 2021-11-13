/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import IconGallery from './ExpandedViewIcons/IconGallery';
import customIncrement from './customIncrement';

const imageNotFound = 'https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif';
export default function ExpandedView({
  productStyles, currentStyle, setExpanded, currentImage, setCurrentImage,
}) {
  const [zoomed, setZoomed] = useState(false);
  const sampleStyle = productStyles.results[currentStyle];
  const { name } = sampleStyle;
  const urls = sampleStyle.photos.map((result) => (result.url ? result.url : imageNotFound));
  const onIncrement = (direction) => {
    customIncrement(direction, setCurrentImage, urls, currentImage)
  };

  const alt = urls[currentStyle] === imageNotFound ? 'Image Not Found' : name;
  let leftVis = currentImage === 0 ? 'hidden' : 'visible';
  let rightVis = currentImage === urls.length - 1 ? 'hidden' : 'visible';
  let xVis = 'visible';
  let iconVis = 'visible';
  const zoomStyle = zoomed
    ? {
      transform: 'scale(2)',
      zIndex: '3',
    }
    : {
      left: '0%',
      top: '0%',
      transform: 'scale(1)',

    };
  if (zoomed) {
    leftVis = 'hidden';
    rightVis = 'hidden';
    xVis = 'hidden';
    iconVis = 'hidden';
  }

  const toggleZoomed = () => {
    setZoomed(!zoomed);
  };

  const onMouseMove = (e) => {
    if (zoomed) {
      const image = document.getElementById('expandedCarouselImage');
      image.style.left = `${-(e.screenX * 60) / screen.width}%`;
      image.style.top = `${-(e.screenY * 50) / screen.height}%`;
    }
  };
  return (

    <div id={styles.expandedView} data-testid="expandedView">

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
      <div id={styles.viewPort} data-testid="viewPort">
        <img
          data-testid="expandedCarouselImage"
          className={styles.expandedCarouselImage}
          id="expandedCarouselImage"
          alt={alt}
          src={urls[currentImage]}
          onClick={toggleZoomed}
          onKeyDown={toggleZoomed}
          style={zoomStyle}
          onMouseMove={onMouseMove}
        />

      </div>

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
        style={{ visibility: xVis }}
      >
        x
      </button>
      <IconGallery
        urls={urls}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        iconVis={iconVis}
      />
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
