import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import Thumbnail from './Thumbnail';

function ThumbnailGallery({ urls }) {
  const thumbnails = urls.map((url) => <Thumbnail url={url} />);
  return (
    <div data-testid="thumbnailGallery" id={styles.thumbnailGallery}>
      <div data-testid="scrollingGallery" id={styles.scrollingGallery}>
        {thumbnails}
      </div>
      <button type="button" data-testid="scrollGalleryLeft" className={styles.scrollButton} id={styles.scrollButtonLeft}>&lt;</button>
      <button type="button" data-testid="scrollGalleryRight" className={styles.scrollButton} id={styles.scrollButtonRight}>&gt;</button>
    </div>
  );
}
export default ThumbnailGallery;

ThumbnailGallery.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
