/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';

const QuestionsAndAnswers = ({ currentProduct }) => {
  const apiURL = 'http://127.0.0.1:3000/questions/';
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  const getQuestions = (id, number) => {
    axios.get(`${apiURL}${id}/${number}`)
      .then(({ data }) => {
        setCurrentProductQuestions(data.results);
      });
  };
  useEffect(() => {
    getQuestions(currentProduct.id, 100);
  }, [currentProduct]);

  const [loadOrCollapse, setLoadOrCollapse] = useState(false);

  return (
    <div id={styles.qAndA}>
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput />
      <QuestionsList currentProductQuestions={loadOrCollapse ? currentProductQuestions : currentProductQuestions.filter((question) => currentProductQuestions.indexOf(question) < 4)} />
      {loadOrCollapse ? <input type="button" value="Collapse" onClick={() => { setLoadOrCollapse(false); }} />
        : <input type="button" value="More Answered Questions" onClick={() => { setLoadOrCollapse(true); }} />}
    </div>
  );
};

QuestionsAndAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsAndAnswers;
