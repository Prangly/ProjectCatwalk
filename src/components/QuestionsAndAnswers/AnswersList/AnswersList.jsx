/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Answers from '../Answers/Answers';

const AnswersList = ({ answers, setAnswerHelpfulness, setReportAnswer }) => (
  <div id={styles.answersList}>
    <span id={styles.answer}>
      A:
    </span>
    <span>
      {answers.map((answer) => <Answers answer={answer} setAnswerHelpfulness={setAnswerHelpfulness} setReportAnswer={setReportAnswer} index={answers.indexOf(answer)} />)}
    </span>
  </div>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setReportAnswer: PropTypes.func.isRequired,
};
export default AnswersList;
