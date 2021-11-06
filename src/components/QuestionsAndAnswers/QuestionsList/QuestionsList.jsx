import React from 'react';
import PropTypes from 'prop-types';
// import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';
import styles from './styles.css';

const QuestionsList = ({ currentProductQuestions, currentProductName}) => (
  <div className={styles.questionsList}>
    {currentProductQuestions.map((question) => <Questions question={question} currentProductName={currentProductName}/>)}
  </div>
);

QuestionsList.propTypes = {
  currentProductQuestions: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default QuestionsList;
