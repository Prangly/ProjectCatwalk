import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import AnswersList from '../AnswersList/AnswersList';
import QuestionsAndAnswersModal from '../QuestionsAndAnswersModal/QuestionsAndAnswersModal';
import ProductContext from '../../../ProductContext';

const Questions = ({
  question,
  currentProductName,
  setQuestionHelpfulness,
  setAnswerHelpfulness,
  setModalClose,
  setReportAnswer,
}) => {
  const [loadOrCollapse, setLoadOrCollapse] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
  const { setIsError, setErrorCode } = useContext(ProductContext);
  const apiURL = `/answers/${question.question_id}/20`;
  const getAnswers = () => {
    axios.get(apiURL)
      .then(({ data }) => {
        setCurrentQuestionAnswers(data.results);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  const updateQuestionHelpfulness = () => {
    axios.put(`/updateQuestionHelpfulness/${question.question_id}`)
      .then(window.localStorage[question.question_id] = 'clicked')
      .then(() => setQuestionHelpfulness((questionHelpfulness) => questionHelpfulness + 1))
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  const filterCurrentQuestionAnswers = currentQuestionAnswers.filter((answer) => (
    currentQuestionAnswers.indexOf(answer) < 2));

  useEffect(() => {
    getAnswers();
  }, [question]);

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
          {window.localStorage[question.question_id] === 'clicked' ? (
            <button type="button" className={styles.clickedButton}>
              Yes
            </button>
          ) : (
            <button type="button" className={styles.button} onClick={() => updateQuestionHelpfulness()}>
              Yes
            </button>
          )}
          {'  ('}
          {question.question_helpfulness}
          {')  '}
          |
          {'  '}
          <button type="button" className={styles.button} onClick={() => setOpenModal(true)}>
            Add Answer
          </button>
          <QuestionsAndAnswersModal
            type="answer"
            openModal={openModal}
            currentProductName={currentProductName}
            questionId={question.question_id}
            questionBody={question.question_body}
            setOpenModal={setOpenModal}
            setModalClose={setModalClose}
          />
        </span>
      </div>
      <div className={styles.answers}>
        <AnswersList
          answers={loadOrCollapse ? filterCurrentQuestionAnswers : currentQuestionAnswers}
          setAnswerHelpfulness={setAnswerHelpfulness}
          setReportAnswer={setReportAnswer}
        />
        {loadOrCollapse && currentQuestionAnswers.length > 2
          ? (
            <input
              type="button"
              className={styles.moreAnswersOrCollapse}
              value="More Answers"
              onClick={() => { setLoadOrCollapse(false); }}
            />
          )
          : null}
        {loadOrCollapse
          ? null
          : (
            <input
              type="button"
              className={styles.moreAnswersOrCollapse}
              value="Collapse Answers"
              onClick={() => { setLoadOrCollapse(true); }}
            />
          )}
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
  setReportAnswer: PropTypes.func.isRequired,
};

export default Questions;
