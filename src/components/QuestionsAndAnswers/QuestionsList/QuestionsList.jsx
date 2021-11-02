import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
// import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = ({ currentProduct }) => {
  // console.log(currentProduct);
  const apiURL = 'http://127.0.0.1:3000/qa/questions/';
  // console.log(currentProduct);
  // const [currentProductID, setCurrentProductID] = useState(currentProduct.id);
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  // console.log(apiURL);
  // setCurrentProductID(currentProduct.id);
  const getQuestions = (id) => {
    axios.get(apiURL + id)
      .then(({ data }) => {
        console.log(data);
        setCurrentProductQuestions(data.results);
      });
  };

  useEffect(() => {
    // setCurrentProductID(currentProduct.id)
    getQuestions(currentProduct.id);
  }, [currentProduct]);

  return (
    <div>
      {currentProductQuestions.map((question) => (
        <Questions question={question} />
      ))}
    </div>
  );
};

QuestionsList.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsList;
