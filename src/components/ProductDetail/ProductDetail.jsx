import React, { useState } from 'react';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import DetailText from './DetailText/DetailText';
import SampleProduct from '../../SampleData/SampleProduct';
import sampleStyles from '../../SampleData/SampleStyles';

const currentProduct = SampleProduct;

const ProductDetail = () => {
  const [currentStyle, setCurrentStyle] = useState(0);

  return (
    <div data-testid="productDetail" id={styles.productDetail}>
      <div id={styles.upperContainer}>
        <ImageCarousel
          id={styles.imageCarousel}
          productStyles={sampleStyles}
          currentStyle={currentStyle}
        />
        <StylesAndSizes
          id={styles.stylesAndSizes}
          productStyles={sampleStyles}
          name={SampleProduct.name}
          setCurrentStyle={setCurrentStyle}
        />
      </div>
      <DetailText data-testid="detailText" id={styles.detailText} product={currentProduct} />
    </div>
  );
};

export default ProductDetail;
