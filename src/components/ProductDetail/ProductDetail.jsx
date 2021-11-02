import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import DetailText from './DetailText/DetailText';
import SampleProduct from '../../SampleData/SampleProduct';
import sampleStyles from '../../SampleData/SampleStyles';

// const currentProduct = SampleProduct;
const stylesURL = 'http://127.0.0.1:3000/styles/';

const ProductDetail = ({ currentProduct }) => {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [productStyles, setProductStyles] = useState(sampleStyles);
  console.log(currentProduct);
  const { id } = currentProduct;
  const stylesAPI = (currentProductID) => {
    axios.get(stylesURL + currentProductID)
      .then((data) => {
        setProductStyles(data.data);
      });
  };

  useEffect(() => {
    stylesAPI(id);
  }, [currentProduct]);

  return (
    <div data-testid="productDetail" id={styles.productDetail}>
      <div id={styles.upperContainer}>
        <ImageCarousel
          id={styles.imageCarousel}
          productStyles={productStyles}
          currentStyle={currentStyle}
        />
        <StylesAndSizes
          id={styles.stylesAndSizes}
          productStyles={productStyles}
          name={SampleProduct.name}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
        />
      </div>
      <DetailText data-testid="detailText" id={styles.detailText} product={currentProduct} />
    </div>
  );
};

ProductDetail.propTypes = {
  currentProduct: PropTypes.shape({
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

export default ProductDetail;
