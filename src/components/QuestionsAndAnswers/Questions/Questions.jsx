/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import AnswersList from '../AnswersList/AnswersList';
import QuestionsAndAnswersModal from '../QuestionsAndAnswersModal/QuestionsAndAnswersModal';

const Questions = ({
  question, currentProductName, setQuestionHelpfulness, setAnswerHelpfulness, setModalClose,
}) => {
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
      .then(() => setQuestionHelpfulness((questionHelpfulness) => questionHelpfulness + 1));
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
          <button type="button" className={styles.button} onClick={() => updateQuestionHelpfulness()}>
            Yes
          </button>
          {'  ('}
          {question.question_helpfulness}
          {')  '}
          |
          {'  '}
          <button type="button" className={styles.button} onClick={() => setOpenModal(true)}>
            Add Answer
          </button>
          <QuestionsAndAnswersModal type="answer" openModal={openModal} currentProductName={currentProductName} questionId={question.question_id} questionBody={question.question_body} setOpenModal={setOpenModal} setModalClose={setModalClose} />
        </span>
      </div>
      <div className={styles.answers}>
        <AnswersList answers={loadOrCollapse ? currentQuestionAnswers.filter((answer) => currentQuestionAnswers.indexOf(answer) < 2) : currentQuestionAnswers} setAnswerHelpfulness={setAnswerHelpfulness} />
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
    question_id: PropTypes.number,
    question_helpfulness: PropTypes.number,
  }).isRequired,
  currentProductName: PropTypes.string.isRequired,
  setQuestionHelpfulness: PropTypes.func.isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setModalClose: PropTypes.func.isRequired,
};

export default Questions;
