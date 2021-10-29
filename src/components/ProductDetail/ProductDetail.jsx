import React from 'react';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import DetailText from './DetailText/DetailText';

const ProductDetail = () => (
  <div data-testid="productDetail" id={styles.productDetail}>
    <ImageCarousel />
    <StylesAndSizes />
    <DetailText />
    <h1>Product Detail</h1>
  </div>
);

export default ProductDetail;
