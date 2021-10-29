import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function StyleIcon({ style }) {
  return (
    <img data-testid="styleIcon" alt={style.name} src={style.photos[0].thumbnail_url} className={styles.styleIcon} />
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
};
