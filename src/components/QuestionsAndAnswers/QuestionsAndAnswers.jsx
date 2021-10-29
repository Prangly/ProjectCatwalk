import React from 'react';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';

const QuestionsAndAnswers = () => (
  <div id={styles.qAndA}>
    <h1>Questions and Answers</h1>
    <QuestionsSearchInput />
  </div>
);

export default QuestionsAndAnswers;
