import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import Thumbnail from './Thumbnail';

function ThumbnailGallery({ urls, currentImage, setCurrentImage }) {
  const [scroll, setScroll] = useState(25);
  const onScroll = (direction) => {
    if (direction === 'right' && scroll >= 0) {
      setScroll(scroll - 50);
    } else if (direction === 'left' && scroll < 25) {
      setScroll(scroll + 50);
    }
  };

  useEffect(() => {
    if (currentImage <= 3) {
      setScroll(25);
    }
    if (currentImage > 3) {
      setScroll(-25);
    }
  }, [currentImage]);

  const thumbnails = urls.map((url, i) => (
    <Thumbnail
      url={url}
      i={i}
      key={url}
      currentImage={currentImage}
      setCurrentImage={setCurrentImage}
    />
  ));
  return (
    <div data-testid="thumbnailGallery" id={styles.thumbnailGallery}>
      <div
        data-testid="scrollingGallery"
        id={styles.scrollingGallery}
        style={{
          left: `${scroll}%`,
        }}
      >
        {thumbnails}
      </div>
      <button
        type="button"
        data-testid="scrollGalleryLeft"
        className={styles.scrollButton}
        id={styles.scrollButtonLeft}
        onClick={() => {
          onScroll('left');
        }}
      >
        &lt;
      </button>
      <button
        type="button"
        data-testid="scrollGalleryRight"
        className={styles.scrollButton}
        id={styles.scrollButtonRight}
        onClick={() => {
          onScroll('right');
        }}
      >
        &gt;
      </button>
    </div>
  );
}
export default ThumbnailGallery;

ThumbnailGallery.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};