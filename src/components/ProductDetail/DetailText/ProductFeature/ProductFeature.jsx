import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ProductFeature({ feature }) {
  return (
    <div
      data-testid="productFeature"
      className={styles.productFeature}
    >
      <span className={styles.feature}>
        {feature.feature}
        :
      </span>
      <span className={styles.value}>
        {feature.value}
      </span>

    </div>
  );
}

ProductFeature.propTypes = {
  feature: PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};
