import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import SampleAnswers from '../SampleData/SampleAnswers';
import Answers from '../Answers/Answers';

const Questions = ({ question }) => (
  <div>
    <div>
      Q:
      {question.question_body}
      <span>
        Helpful?
        {' '}
        <span onClick={()=>console.log('Need to update the counter for question helpfulness!')}>
          Yes
        </span>
        {' '}
        |
        {' '}
        <span onClick={()=> console.log('Need to render a modal pop up for adding an answer!')}>
          Add Answer
        </span>
      </span>
    </div>
    <div>
      {SampleAnswers.results.map((answer) => <Answers answer={answer} />)}
    </div>
  </div>
);

Questions.propTypes = {
  question: PropTypes.shape({
    question_body: PropTypes.string,
  }).isRequired,
};

export default Questions;
