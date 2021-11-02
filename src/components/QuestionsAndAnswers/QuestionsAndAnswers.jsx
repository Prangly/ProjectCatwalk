import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';

var displayQuestionNumber = 4; //initial # of questions to load

const QuestionsAndAnswers = ({ currentProduct }) => {
  const apiURL = 'http://127.0.0.1:3000/qa/questions/';
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  const getQuestions = (id, number = displayQuestionNumber) => {
    axios.get(`${apiURL}${id}/${number}`)
      .then(({ data }) => {
        setCurrentProductQuestions(data.results);
      });
  };
  useEffect(() => {
    getQuestions(currentProduct.id);
  }, [currentProduct]);


  const [moreQuestions, setDisplayMoreQuestions] = useState(false);

  return (
    <div id={styles.qAndA}>
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput />
      <QuestionsList currentProductQuestions={currentProductQuestions} moreQuestions={moreQuestions} />
      <input
        type="button"
        value="More Answered Questions"
        onClick={() => {
          displayQuestionNumber += 4;
          console.log(displayQuestionNumber);
          setDisplayMoreQuestions(getQuestions(currentProduct.id,displayQuestionNumber))}} />
    </div>
  );
};

QuestionsAndAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsAndAnswers;
