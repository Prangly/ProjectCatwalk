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
    <div id={styles.upperContainer}>
      <ImageCarousel id={styles.imageCarousel} product={sampleStyles} />
      <StylesAndSizes
        id={styles.stylesAndSizes}
        productStyles={sampleStyles}
        name={SampleProduct.name}
      />
    </div>
    <DetailText id={styles.detailText} product={currentProduct} />
  </div>

);

export default ProductDetail;
