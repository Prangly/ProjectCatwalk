/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Answers from '../Answers/Answers';

const AnswersList = ({ answers, setAnswerHelpfulness, setReportAnswer }) => (
  <div>
    <span id={styles.answer}>
      A:
    </span>
    <div id={styles.answersList}>
      {answers.map((answer) => <Answers answer={answer} setAnswerHelpfulness={setAnswerHelpfulness} setReportAnswer={setReportAnswer} />)}
    </div>
  </div>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setReportAnswer: PropTypes.func.isRequired,
};
export default AnswersList;
