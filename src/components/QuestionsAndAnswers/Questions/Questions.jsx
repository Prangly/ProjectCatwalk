import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import SampleAnswers from '../SampleData/SampleAnswers';
import Answers from '../Answers/Answers';

const Questions = ({ question }) => {
  const apiURL = `http://127.0.0.1:3000/qa/questions/${question.question_id}/answers`;

  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);

  const getAnswers = () => {
    axios.get(apiURL)
      .then(({ data }) => {
        // console.log(data);
        setCurrentQuestionAnswers(data.results);
      });
  };

  useEffect(() => {
    getAnswers();
  }, [question]);
  return (
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
        {currentQuestionAnswers.map((answer) => <Answers answer={answer} />)}
      </div>
    </div>
  )
};

Questions.propTypes = {
  question: PropTypes.shape({
    question_body: PropTypes.string,
  }).isRequired,
};

export default Questions;
