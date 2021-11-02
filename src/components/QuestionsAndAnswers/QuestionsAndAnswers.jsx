import React from 'react';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';

const QuestionsAndAnswers = () => (
  <div id={styles.qAndA}>
    <h1>Questions and Answers</h1>
    <QuestionsSearchInput />
    <QuestionsList />
  </div>
);

export default QuestionsAndAnswers;
