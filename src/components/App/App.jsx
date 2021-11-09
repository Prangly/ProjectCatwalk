/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import QandA from '../QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import sampleProduct from '../../SampleData/SampleProduct.js';
import ProductContext from '../../ProductContext.jsx';

const productURL = 'http://127.0.0.1:3000/products/';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentProductID, setCurrentProductID] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(sampleProduct);
  const [currentOutfit, setCurrentOutfit] = useState([]);
  const [currentProductAvgRating, setCurrentProductAvgRating] = useState(3);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCurrentProductID(id);
    } else {
      setCurrentProductID(61577, setLoading(false));
    }
  }, []);

  useEffect(() => {
    setCurrentProductID(id);
  }, [id]);

  const addToOutfit = (product) => {
    if (!currentOutfit.includes(product)) {
      const newOutfit = [...currentOutfit];
      newOutfit.push(product);
      setCurrentOutfit(newOutfit);
    }
  };

  const productAPI = (prodId) => {
    if (prodId) {
      axios.get(productURL + prodId)
        .then((data) => {
          setCurrentProduct(data.data, setLoading(false));
        });
    }
  };
  useEffect(() => {
    productAPI(currentProductID);
  }, [currentProductID]);

  if (loading) { return (<h1>loading</h1>); }
  return (
    <div id="app">
      {/* <Link to="/61577">61577</Link> */}
      {/* <Link to="/61579"> 61579</Link> */}
      <Navbar />
      <ProductContext.Provider value={{
        currentProduct,
        setCurrentProductID,
        currentProductAvgRating,
        setCurrentProductAvgRating,
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
