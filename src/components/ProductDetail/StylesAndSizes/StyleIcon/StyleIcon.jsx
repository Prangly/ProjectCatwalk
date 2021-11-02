import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

<<<<<<< HEAD
export default function StyleIcon({ style, setCurrentStyle, i }) {
  return (
    <img
      onClick={() => {
        setCurrentStyle(i)
      }}
      onKeyDown={() => {
        setCurrentStyle(i)
      }}
      data-testid="styleIcon"
      alt={style.name}
      src={style.photos[0].thumbnail_url}
      className={styles.styleIcon}
    />
=======
export default function StyleIcon({
  style, setCurrentStyle, i, currentStyle,
}) {
  const currentStyleBorder = i === currentStyle ? '3px solid rgba(0,0,0,0.5)' : 'none';
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
        alt={style.name}
        style={{
          boxSizing: 'border-box',
          background: `url(${style.photos[0].thumbnail_url})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          objectFit: 'contain',
          border: currentStyleBorder,
        }}
        className={styles.styleIcon}
      />
      <span className={styles.tooltip}>
        {style.name}
      </span>
    </div>
>>>>>>> main
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
<<<<<<< HEAD
=======
  currentStyle: PropTypes.number.isRequired,
>>>>>>> main
};
