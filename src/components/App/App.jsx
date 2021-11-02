/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import QandA from '../QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import sampleProduct from '../../SampleData/SampleProduct.js';

const productURL = 'http://127.0.0.1:3000/products/';

const App = () => {
  const [currentProductID, setCurrentProductID] = useState('61577');
  const [currentProduct, setCurrentProduct] = useState(sampleProduct);
  const productAPI = (id) => {
    axios.get(productURL + id)
      .then((data) => {
        setCurrentProduct(data.data);
      });
  };
  useEffect(() => {
    productAPI(currentProductID);
  }, [currentProductID]);

  return (
    <div id="app">
      <Navbar />
      <ProductDetail currentProduct={currentProduct} />
      <RandOC currentProduct={currentProduct} setCurrentProductID={setCurrentProductID} />
      <QandA currentProduct={currentProduct} />
      <RatAndRev currentProduct={currentProduct} />
    </div>
  );
};

export default App;
