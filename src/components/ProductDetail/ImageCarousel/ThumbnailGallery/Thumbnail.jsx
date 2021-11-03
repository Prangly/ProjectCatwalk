import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Thumbnail({
  url, i, currentImage, setCurrentImage,
}) {
  const selectedBorder = i === currentImage
    ? '2px solid white' : 'none';

  return (
    <div data-testid="thumbnail" className={styles.thumbnailContainer}>
      <button
        type="button"
        aria-label="image thumbnail"
        data-testid="thumbnailImage"
        className={styles.thumbnailImage}
        onClick={() => setCurrentImage(i)}
        style={{
          background: `url(${url})`,
          boxSizing: 'border-box',
          backgroundSize: '3.8em auto',
          backgroundPosition: 'center',
          objectFit: 'contain',
          border: selectedBorder,
        }}
      />
    </div>

  );
}

export default Thumbnail;

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,

};
