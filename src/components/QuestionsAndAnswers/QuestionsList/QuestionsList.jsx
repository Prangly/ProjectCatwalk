import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = (props) => (
  <div>
    {SampleData.results.map((question) => (
      <Questions question={question} />
    ))}
  </div>
);

QuestionsList.propTypes = {
};

export default QuestionsList;
