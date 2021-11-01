import React, { useState } from 'react';
import styles from './styles.css';
import SampleData from '../SampleData/sampleQuestions';
import Questions from '../Questions/Questions';

const QuestionsList = (props) => (
  <div>
    {SampleData.results.map((question) => (
      <Questions question={question} />
    ))}
  </div>
);

export default QuestionsList;