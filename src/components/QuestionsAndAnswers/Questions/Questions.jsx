import React, { useState } from 'react';
import styles from './styles.css';
import SampleAnswers from '../SampleData/SampleAnswers';

const Questions = ({ question }) => {
  console.log(question);
  return (
    <div>
      <div>
        Q:
        {question.question_body}
      </div>
      <div>
        A:
        {SampleAnswers.results[0].body}
      </div>
      <div>
        A:
        {SampleAnswers.results[1].body}
      </div>
      <div>
        A:
        {SampleAnswers.results[2].body}
      </div>
      <div>
        A:
        {SampleAnswers.results[3].body}
      </div>
      <div>
        A:
        {SampleAnswers.results[4].body}
      </div>
    </div>
  );
};

export default Questions;