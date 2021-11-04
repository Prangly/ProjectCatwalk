import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function PhotoIcon({
  i, currentImage, setCurrentImage,
}) {
  const selectedShadow = i === currentImage
    ? '0px 0px 5px rgba(255,255,255, 0.7) ' : '';
  const selectedOpacity = i === currentImage
    ? '1 ' : '0.5';

  return (
    <button
      type="button"
      aria-label="photoIconButton"
      data-testid="photoIcon"
      className={`${styles.photoIcon} `}
      style={{
        boxShadow: selectedShadow,
        opacity: selectedOpacity,
      }}
      onClick={() => setCurrentImage(i)}
      onKeyDown={() => setCurrentImage(i)}
    />

  );
}

export default PhotoIcon;

PhotoIcon.propTypes = {
  url: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,

};
