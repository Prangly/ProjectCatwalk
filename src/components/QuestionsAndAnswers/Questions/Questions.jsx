/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import AnswersList from '../AnswersList/AnswersList';
import QuestionsAndAnswersModal from '../QuestionsAndAnswersModal/QuestionsAndAnswersModal';

const Questions = ({ question, currentProductName, setHelpfulness }) => {
  const apiURL = `http://127.0.0.1:3000/answers/${question.question_id}/100`;
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
  const getAnswers = () => {
    axios.get(apiURL)
      .then(({ data }) => {
        setCurrentQuestionAnswers(data.results);
      });
  };

  useEffect(() => {
    getAnswers();
  }, [question]);


  const updateQuestionHelpfulness = () => {
    axios.put(`/updateQuestionHelpfulness/${question.question_id}`)
      .then(() => useEffect(() => {getAnswers()}))
      .catch(() => console.log('I was not able to update the helpfulness counter.'));
    setHelpfulness(true);
  };

  const [loadOrCollapse, setLoadOrCollapse] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.questionsAndAnswers}>
      <div className={styles.question}>
        Q:
        {'  '}
        {question.question_body}
        {'  '}
        <span className={styles.buttons}>
          Helpful?
          {'  '}
          <span className={styles.underline} onClick={() => updateQuestionHelpfulness()}>
            Yes
          </span>
          {'  ('}
          {question.question_helpfulness}
          {')  '}
          |
          {'  '}
          <span className={styles.underline} onClick={() => setOpenModal(true)}>
            Add Answer
          </span>
          <QuestionsAndAnswersModal type={'answer'} openModal={openModal} currentProductName={currentProductName} questionId={question.question_id} questionBody={question.question_body} setOpenModal={setOpenModal} />
        </span>
      </div>
      <div className={styles.answers}>
        <AnswersList answers={loadOrCollapse ? currentQuestionAnswers.filter((answer) => currentQuestionAnswers.indexOf(answer) < 2) : currentQuestionAnswers} />
        {loadOrCollapse && currentQuestionAnswers.length > 2 ? <input type="button" value="More Answers" onClick={() => { setLoadOrCollapse(false); }} />
          : null}
        {loadOrCollapse ? null
          : <input type="button" value="Collapse" onClick={() => { setLoadOrCollapse(true); }} />}
      </div>
    </div>
  );
};

Questions.propTypes = {
  question: PropTypes.shape({
    question_body: PropTypes.string,
  }).isRequired,
};

export default Questions;
