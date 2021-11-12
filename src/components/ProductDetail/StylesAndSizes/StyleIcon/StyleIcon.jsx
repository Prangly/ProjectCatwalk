import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const imageNotFound = 'https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif';

export default function StyleIcon({
  style, setCurrentStyle, i, currentStyle,
}) {
  const src = style.photos[0].thumbnail_url || imageNotFound;
  const currentStyleShadow = i === currentStyle ? '1px 1px 5px 2px rgba(0, 0, 0, 0.5)' : '1px 1px 3px rgba(0, 0, 0, 0.5)';
  const alt = style.photos[0].thumbnail_url ? style.name : 'Image Not Found';
  return (
    <div className={styles.styleIconContainer}>
      <button
        type="button"
        onClick={() => {
          setCurrentStyle(i);
        }}
        onKeyDown={() => {
          setCurrentStyle(i);
        }}
        data-testid="styleIcon"
        alt={alt}
        style={{
          boxSizing: 'border-box',
          backgroundImage: `url(${src})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          objectFit: 'contain',
          boxShadow: currentStyleShadow,
        }}
        className={styles.styleIcon}
      />
      <span className={styles.tooltip}>
        {style.name}
      </span>
    </div>
  );
}

StyleIcon.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  currentStyle: PropTypes.number.isRequired,
};
