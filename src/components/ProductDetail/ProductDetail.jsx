import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import DetailText from './DetailText/DetailText';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
import ExpandedView from './ImageCarousel/ExpandedView';
import ProductContext from '../../ProductContext';
import { stylesAPI } from '../api';

const ProductDetail = ({ addToOutfit }) => {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [productStyles, setProductStyles] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const {
    currentProduct,
    setIsError,
    setErrorCode,
  } = useContext(ProductContext);

  const { id, name, category } = currentProduct;

  useEffect(() => {
    stylesAPI(id, (data) => {
      setProductStyles(data.data);
    }, (err) => {
      setErrorCode(err.response.status);
      setIsError(true);
    });
  }, [currentProduct]);

  const expandedView = expanded
    ? (
      <ExpandedView
        id={styles.imageCarousel}
        productStyles={productStyles}
        currentStyle={currentStyle}
        setExpanded={setExpanded}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    ) : '';

  if (!productStyles) {
    return (
      <div data-testid="productDetail" className={`${styles.productDetail} ${styles.loading} ourContainer`}>
        <h1>...</h1>
      </div>
    );
  }
  return (
    <div data-testid="productDetail" className={`${styles.productDetail} ourContainer`}>
      <div id={styles.upperContainer} data-testid="upperContainer">
        <ImageCarousel
          id={styles.imageCarousel}
          productStyles={productStyles}
          currentStyle={currentStyle}
          setExpanded={setExpanded}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
        <StylesAndSizes
          id={styles.stylesAndSizes}
          productStyles={productStyles}
          name={name}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          addToOutfit={addToOutfit}
          category={category}
        />
      </div>
      <DetailText data-testid="detailText" id={styles.detailText} product={currentProduct} />
      {expandedView}
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
  addToOutfit: PropTypes.func.isRequired,
};

export default ProductDetail;
