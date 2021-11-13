import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import Thumbnail from './Thumbnail';

function ThumbnailGallery({ urls, currentImage, setCurrentImage }) {
  const [scroll, setScroll] = useState(25);
  const onScroll = (direction) => {
    if (direction === 'right' && scroll >= -100 && urls.length > 3) {
      setScroll((prevScroll) => prevScroll - 75);
    } else if (direction === 'left' && scroll < 25 && urls.length > 3) {
      setScroll((prevScroll) => prevScroll + 75);
      if (scroll > 60) setScroll(60);
    }
  };

  useEffect(() => {
    setScroll(50 + ((-180 * currentImage) / urls.length));
  }, [currentImage]);

  useEffect(() => {
    setScroll(50);
  }, []);
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
