/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../Questions/Questions';
import styles from './styles.css';

const QuestionsList = ({
  currentProductQuestions, currentProductName, setQuestionHelpfulness, setAnswerHelpfulness, setModalClose,
}) => (
  <div className={styles.questionsList}>
    {currentProductQuestions.map((question) => <Questions question={question} currentProductName={currentProductName} setQuestionHelpfulness={setQuestionHelpfulness} setAnswerHelpfulness={setAnswerHelpfulness} setModalClose={setModalClose} />)}
  </div>
);

QuestionsList.propTypes = {
  currentProductQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentProductName: PropTypes.string.isRequired,
  setQuestionHelpfulness: PropTypes.func.isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setModalClose: PropTypes.func.isRequired,
};

export default QuestionsList;
