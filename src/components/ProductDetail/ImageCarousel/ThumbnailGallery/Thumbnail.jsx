import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function Thumbnail({ url }) {
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

        }}
      />
    </div>

  );
}

export default Thumbnail;

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};
