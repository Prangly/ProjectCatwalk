/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import QandA from '../QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import sampleProduct from '../../SampleData/SampleProduct.js';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(sampleProduct);
  return (
    <div id="app">
      <Navbar />
      <ProductDetail currentProduct={currentProduct} />
      <RandOC currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
      <QandA currentProduct={currentProduct} />
      <RatAndRev currentProduct={currentProduct} />
    </div>
  );
};

export default App;
