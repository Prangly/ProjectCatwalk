import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';

const QuestionsAndAnswers = ({ currentProduct }) => {
  const apiURL = 'http://127.0.0.1:3000/qa/questions/';
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  const getQuestions = (id, number = 4) => {
    axios.get(`${apiURL}${id}/${number}`)
      .then(({ data }) => {
        setCurrentProductQuestions(data.results);
      });
  };
  useEffect(() => {
    getQuestions(currentProduct.id);
  }, [currentProduct]);

  const [loadOrCollapse, setLoadOrCollapse] = useState(false);

  return (
    <div id={styles.qAndA}>
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput />
      <QuestionsList currentProductQuestions={currentProductQuestions} />
      {loadOrCollapse ? <input type="button" value="Collapse" onClick={() => { console.log('I am at collapse'); setLoadOrCollapse(false); getQuestions(currentProduct.id, 100); }} />
        : <input type="button" value="More Answered Questions" onClick={() => { console.log('I am at more answered questions'); setLoadOrCollapse(true); console.log(loadOrCollapse); getQuestions(currentProduct.id, 100); }} />}
    </div>
  );
};

QuestionsAndAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsAndAnswers;
