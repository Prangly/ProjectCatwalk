import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';

const QuestionsAndAnswers = ({ currentProduct }) => (
  <div id={styles.qAndA}>
    <h1>Questions and Answers</h1>
    <QuestionsSearchInput />
    <QuestionsList currentProduct={currentProduct} />
  </div>
);

QuestionsAndAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsAndAnswers;
