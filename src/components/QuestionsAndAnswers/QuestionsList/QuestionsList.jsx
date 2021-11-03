import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
// import SampleData from '../SampleData/SampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = ({ currentProductQuestions }) => (
  <div>
    {currentProductQuestions.map((question) => <Questions question={question} />)}
  </div>
);

QuestionsList.propTypes = {
  // currentProduct: PropTypes.shape({
  //   id: PropTypes.number,
  // }).isRequired,
  moreQuestions: PropTypes.bool.isRequired,
};

export default QuestionsList;
