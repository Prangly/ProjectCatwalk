import React from 'react';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import DetailText from './DetailText/DetailText';
import SampleProduct from './SampleData/SampleProduct';
import sampleStyles from './SampleData/SampleStyles';

const currentProduct = SampleProduct;

const ProductDetail = () => (
  <div data-testid="productDetail" id={styles.productDetail}>
    <ImageCarousel id={styles.imageCarousel} product={currentProduct} />
    <DetailText id={styles.detailText} product={currentProduct} />
    <StylesAndSizes id={styles.stylesAndSizes} product={sampleStyles} />
  </div>

);

export default ProductDetail;
