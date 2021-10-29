import React from 'react';
import PropTypes from 'prop-types';

export default function ProductFeature({ feature }) {
  return (
    <div id="productFeature">
      {feature.feature}
      {feature.value}
    </div>
  );
}

ProductFeature.propTypes = {
  feature: PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};
