/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import QandA from '../QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ProductContext from '../../ProductContext.jsx';
import 'babel-polyfill';

const productURL = '/products/';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const [isError, setIsError] = useState(false);
  const [currentProductID, setCurrentProductID] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentOutfit, setCurrentOutfit] = useState([]);
  const [numberOfReviews, setNumberOfReviews] = useState(0);
  const [currentProductAvgRating, setCurrentProductAvgRating] = useState(3);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCurrentProductID(id);
    } else {
      setCurrentProductID('61575');
    }
  }, [id]);

  const productAPI = (prodId) => {
    if (prodId) {
      axios.get(productURL + prodId)
        .then((data) => {
          setCurrentProduct(data.data, setLoading(false));
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(async () => {
    productAPI(currentProductID);
  }, [currentProductID]);

  const addToOutfit = (product) => {
    if (!currentOutfit.includes(product)) {
      const newOutfit = [...currentOutfit];
      newOutfit.push(product);
      setCurrentOutfit(newOutfit);
    }
  };

  const removeFromOutfit = (productToDiscard) => {
    // eslint-disable-next-line max-len
    const revisedOutfit = currentOutfit.filter((item) => item !== productToDiscard);
    setCurrentOutfit(revisedOutfit);
  };

  if (loading || !currentProduct) { return (<h1>loading</h1>); }
  if (isError) { return (<ErrorMessage errorCode={errorCode} />); }
  return (
    <div id="app">
      <Navbar />
      <ProductContext.Provider value={{
        currentProduct,
        setCurrentProductID,
        currentProductAvgRating,
        setCurrentProductAvgRating,
        numberOfReviews,
        setNumberOfReviews,
        setIsError,
        setErrorCode,
      }}
      >
        <ProductDetail addToOutfit={addToOutfit} />
        <RandOC currentProduct={currentProduct} setCurrentProductID={setCurrentProductID} currentOutfit={currentOutfit} removeFromOutfit={removeFromOutfit} />
        <QandA currentProduct={currentProduct} />
        <RatAndRev currentProduct={currentProduct} />
      </ProductContext.Provider>

    </div>
  );
};
export default App;
