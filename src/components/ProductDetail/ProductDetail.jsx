import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import DetailText from './DetailText/DetailText';
import StylesAndSizes from './StylesAndSizes/StylesAndSizes';
// import SampleProduct from '../../SampleData/SampleProduct';
import sampleStyles from '../../SampleData/SampleStyles';
import ExpandedView from './ImageCarousel/ExpandedView';
import ProductContext from '../../ProductContext';

// const currentProduct = SampleProduct;
const stylesURL = 'http://127.0.0.1:3000/styles/';

const ProductDetail = ({ addToOutfit }) => {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [productStyles, setProductStyles] = useState(sampleStyles);
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { currentProduct } = useContext(ProductContext);
  const { id, name } = currentProduct;
  const stylesAPI = (currentProductID, source) => {
    axios.get(stylesURL + currentProductID, { cancelToken: source.token })
      .then((data) => {
        setProductStyles(data.data);
      });
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    stylesAPI(id, source);

    // return () => source.cancel('Styles Request Canceled')
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

  return (
    <div data-testid="productDetail" id={styles.productDetail}>
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
