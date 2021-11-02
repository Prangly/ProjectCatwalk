import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function StyleIcon({ style, setCurrentStyle, i }) {
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
          background: `url(${style.photos[0].thumbnail_url})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          objectFit: 'contain',
          border: 'none',
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
};
