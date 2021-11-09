/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers';

const AnswersList = ({ answers, setAnswerHelpfulness, setReportAnswer }) => (
  <div>
    {answers.map((answer) => <Answers answer={answer} setAnswerHelpfulness={setAnswerHelpfulness} setReportAnswer={setReportAnswer} />)}
  </div>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setReportAnswer: PropTypes.func.isRequired,
};
export default AnswersList;
