import React from 'react';
import PropTypes from 'prop-types';
import ProductFeature from './ProductFeature/ProductFeature';
import styles from './styles.css';

export default function DetailText({ product }) {
  const features = product.features.map(
    // eslint-disable-next-line comma-dangle
    (feature) => <ProductFeature key={feature.feature} feature={feature} />
  );

  return (
    <div id={styles.detailTextContainer} data-testid="detailText">
      <div id="productDetailText">
        <div id="productSlogan">
          {product.slogan}
        </div>
        <div id="productDescription">
          {product.description}
        </div>
      </div>
      <div id="productFeatures">
        {features}
      </div>
    </div>
  );
}

DetailText.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,

};
