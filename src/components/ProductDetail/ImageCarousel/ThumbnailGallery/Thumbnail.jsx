import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Thumbnail({ url, i, currentImage }) {
  const selectedBorder = i === currentImage ?
    '2px solid white' : 'none';

  return (
    <div data-testid="thumbnail" className={styles.thumbnailContainer}>
      <button
        type="button"
        aria-label="image thumbnail"
        data-testid="thumbnailImage"
        className={styles.thumbnailImage}
        style={{
          background: `url(${url})`,
          boxSizing: 'border-box',
          backgroundSize: '2em auto',
          backgroundPosition: 'center',
          objectFit: 'contain',
          boxShadow: '0px 0px 5px white',
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

};
