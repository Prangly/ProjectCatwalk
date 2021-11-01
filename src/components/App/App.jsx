/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import QandA from '../QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Navbar from '../Navbar/Navbar.jsx';

const App = () => {
  const [currentProductID, setCurrentProductID] = useState('61577');

  return (
    <div id="app">
      <Navbar />
      <ProductDetail currentProductID={currentProductID} />
      <RandOC currentProductID={currentProductID} setCurrentProductID={setCurrentProductID} />
      <QandA currentProductID={currentProductID} />
      <RatAndRev currentProductID={currentProductID} />
    </div>
  );
};

export default App;
