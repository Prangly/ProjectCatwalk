/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../Questions/Questions';
import styles from './styles.css';

const QuestionsList = ({
  currentProductQuestions, currentProductName, setQuestionHelpfulness, setAnswerHelpfulness, setModalClose, setReportAnswer,
}) => (
  <div className={styles.questionsList}>
    {currentProductQuestions.map((question) => <Questions question={question} currentProductName={currentProductName} setQuestionHelpfulness={setQuestionHelpfulness} setAnswerHelpfulness={setAnswerHelpfulness} setModalClose={setModalClose} setReportAnswer={setReportAnswer} />)}
  </div>
);

QuestionsList.propTypes = {
  currentProductQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentProductName: PropTypes.string.isRequired,
  setQuestionHelpfulness: PropTypes.func.isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setModalClose: PropTypes.func.isRequired,
  setReportAnswer: PropTypes.func.isRequired,
};

export default QuestionsList;
