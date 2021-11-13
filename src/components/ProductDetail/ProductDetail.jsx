import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import DetailText from './DetailText/DetailText';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
// import SampleProduct from '../../SampleData/SampleProduct';
import ExpandedView from './ImageCarousel/ExpandedView';
import ProductContext from '../../ProductContext';

// const currentProduct = SampleProduct;
const stylesURL = '/styles/';

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
  const stylesAPI = (currentProductID, source) => {
    axios.get(stylesURL + currentProductID, { cancelToken: source.token })
      .then((data) => {
        setProductStyles(data.data);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    stylesAPI(id, source);
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
