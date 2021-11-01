import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import DetailText from './DetailText/DetailText';
import SampleProduct from '../../SampleData/SampleProduct';
import sampleStyles from '../../SampleData/SampleStyles';

const currentProduct = SampleProduct;
const stylesURL = 'http://127.0.0.1:3000/styles/';

const ProductDetail = ({ currentProductID }) => {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [productStyles, setProductStyles] = useState(sampleStyles);
  console.log(currentProductID)
  const stylesAPI = (id) => {
    axios.get(stylesURL + id)
      .then((data) => {
        console.log('response', data.data);
        setProductStyles(data.data);
      });
  };

  useEffect(() => {
    stylesAPI(currentProductID);
  }, [currentProductID]);

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

export default ProductDetail;
