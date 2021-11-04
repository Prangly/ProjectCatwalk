import React, { useState } from 'react';
import PropTypes, { checkPropTypes } from 'prop-types';
import styles from '../styles.css';
import PhotoIcon from './PhotoIcon';

function IconGallery({ urls, currentImage, setCurrentImage, iconVis }) {
  const [scroll, setScroll] = useState(25);
  const onScroll = (direction) => {
    if (direction === 'right' && scroll >= 0) {
      setScroll(scroll - 50);
    } else if (direction === 'left' && scroll < 25) {
      setScroll(scroll + 50);
    }
  };


  const icons = urls.map((url, i) => (
    <PhotoIcon
      i={i}
      key={url}
      currentImage={currentImage}
      setCurrentImage={setCurrentImage}
    />
  ));
  return (
    <div
      data-testid="iconGallery"
      id={styles.iconGallery}
      style={{ visibility: iconVis }}
    >

      {icons}

    </div>

  );
}
export default IconGallery;

IconGallery.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
  iconVis: PropTypes.string.isRequired,
};
