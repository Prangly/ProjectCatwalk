import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
// import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = ({ currentProduct }) => {
  const apiURL = 'http://127.0.0.1:3000/qa/questions/';
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  const getQuestions = (id) => {
    axios.get(apiURL + id)
      .then(({ data }) => {
        setCurrentProductQuestions(data.results);
      });
  };
  useEffect(() => {
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
