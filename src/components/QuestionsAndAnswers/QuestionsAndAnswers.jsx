/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import QuestionsSearchInput from './QuestionsSearchInput/QuestionsSearchInput';
import QuestionsList from './QuestionsList/QuestionsList';
import QuestionsAndAnswersModal from './QuestionsAndAnswersModal/QuestionsAndAnswersModal';

const QuestionsAndAnswers = ({ currentProduct }) => {
  const [currentProductQuestions, setCurrentProductQuestions] = useState([]);
  const getQuestions = () => {
    axios.get(`http://127.0.0.1:3000/questions/${currentProduct.id}/100`)
      .then(({ data }) => {
        setCurrentProductQuestions(data.results);
      });
  };
  useEffect(() => {
    getQuestions();
  }, [currentProduct]);

  const [questionHelpfulness, setQuestionHelpfulness] = useState(0);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(0);
  const [reportAnswer, setReportAnswer] = useState(0);
  const [modalClose, setModalClose] = useState(0);

  useEffect(() => {
    getQuestions();
  }, [questionHelpfulness, answerHelpfulness, modalClose, reportAnswer]);

  const [loadOrCollapse, setLoadOrCollapse] = useState(true);
  const [openQuestionsModal, setOpenQuestionsModal] = useState(false);

  return (
    <div id={styles.qAndA}>
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput />
      <QuestionsList currentProductQuestions={loadOrCollapse ? currentProductQuestions.filter((question) => currentProductQuestions.indexOf(question) < 4) : currentProductQuestions} currentProductName={currentProduct.name} setQuestionHelpfulness={setQuestionHelpfulness} setAnswerHelpfulness={setAnswerHelpfulness} setModalClose={setModalClose} setReportAnswer={setReportAnswer} />
      {loadOrCollapse && currentProductQuestions.length > 4 ? <input type="button" value="More Answered Questions" onClick={() => { setLoadOrCollapse(false); }} />
        : null}
      {loadOrCollapse ? null
        : <input type="button" value="Collapse" onClick={() => { setLoadOrCollapse(true); }} />}
      <div id={styles.addAQuestion}>
        <input type="button" value="Add a question" onClick={() => setOpenQuestionsModal(true)} />
        <QuestionsAndAnswersModal type="question" openModal={openQuestionsModal} currentProductId={currentProduct.id} currentProductName={currentProduct.name} setOpenModal={setOpenQuestionsModal} setModalClose={setModalClose} />
      </div>
    </div>
  );
};

QuestionsAndAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default QuestionsAndAnswers;
