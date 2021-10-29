import React from 'react';
import PropTypes from 'prop-types';
import StyleIcon from './StyleIcon/StyleIcon';

export default function StylesAndSizes({ product }) {
  const { results } = product;

  const styleIcons = results.map((style) => <StyleIcon key={style.style_id} style={style} />);

  return (
    <div data-testid="stylesAndSizes">
      {styleIcons}
    </div>
  );
}

StylesAndSizes.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
