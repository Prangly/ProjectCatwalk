import React from 'react';
import PropTypes from 'prop-types';
// import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = ({ currentProductQuestions }) => (
  <div>
    {currentProductQuestions.map((question) => <Questions question={question} />)}
  </div>
);

QuestionsList.propTypes = {
  currentProductQuestions: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsList;
