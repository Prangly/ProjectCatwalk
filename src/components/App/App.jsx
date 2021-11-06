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
import ProductContext from '../../ProductContext.jsx';

const productURL = 'http://127.0.0.1:3000/products/';

const App = () => {
  const [currentProductID, setCurrentProductID] = useState('61575');
  const [currentProduct, setCurrentProduct] = useState(sampleProduct);
  const [currentOutfit, setCurrentOutfit] = useState([]);

  const addToOutfit = (product) => {
    if (!currentOutfit.includes(product)) {
      const newOutfit = [...currentOutfit];
      newOutfit.push(product);
      setCurrentOutfit(newOutfit);
    }
  };

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
      <ProductContext.Provider value={{
        currentProduct,
        setCurrentProductID,
      }}
      >
        <ProductDetail addToOutfit={addToOutfit} />
        <RandOC currentProduct={currentProduct} setCurrentProductID={setCurrentProductID} />
        <QandA currentProduct={currentProduct} />
        <RatAndRev currentProduct={currentProduct} />
      </ProductContext.Provider>
    </div>
  );
};

export default App;
