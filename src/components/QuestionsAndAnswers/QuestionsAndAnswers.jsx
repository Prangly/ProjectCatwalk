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
  const [questionHelpfulness, setQuestionHelpfulness] = useState(0);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(0);
  const [reportAnswer, setReportAnswer] = useState(0);
  const [modalClose, setModalClose] = useState(0);
  const [loadMoreQuestions, setloadMoreQuestions] = useState(3);
  const [openQuestionsModal, setOpenQuestionsModal] = useState(false);
  const [searchInput, changeSearchInput] = useState('');

  const filterQuestion = (questionsFromAPI) => questionsFromAPI.filter((question) => question.question_body.toLowerCase().includes(searchInput));

  const getQuestions = () => {
    if (searchInput.length > 2) {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      axios.get(`/questions/${currentProduct.id}/20`, {
        cancelToken: source.token,
      })
        .then(({ data }) => (
          filterQuestion(data.results)
        ))
        .then((data) => {
          setCurrentProductQuestions(data);
        });
    } else {
      axios.get(`/questions/${currentProduct.id}/${loadMoreQuestions}`)
        .then(({ data }) => {
          setCurrentProductQuestions(data.results);
        });
    }
  };

  useEffect(() => {
    getQuestions();
  }, [currentProduct, questionHelpfulness, answerHelpfulness, modalClose, reportAnswer, searchInput, loadMoreQuestions]);

  return (
    <div id={styles.qAndA} className="ourContainer">
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput changeSearchInput={changeSearchInput} />
      <QuestionsList currentProductQuestions={currentProductQuestions.filter((question) => currentProductQuestions.indexOf(question) < loadMoreQuestions - 1)} currentProductName={currentProduct.name} setQuestionHelpfulness={setQuestionHelpfulness} setAnswerHelpfulness={setAnswerHelpfulness} setModalClose={setModalClose} setReportAnswer={setReportAnswer} />
      {currentProductQuestions[loadMoreQuestions - 1] !== undefined ? <input type="button" className="ourButton" id={styles.loadMoreQuestions} value="More Answered Questions" onClick={() => { setloadMoreQuestions(loadMoreQuestions + 2); }} />


        : null}
      <span>
        <input type="button" className="ourButton" id={styles.addAQuestion} value="Add a question" onClick={() => setOpenQuestionsModal(true)} />
        <QuestionsAndAnswersModal type="question" openModal={openQuestionsModal} currentProductId={currentProduct.id} currentProductName={currentProduct.name} setOpenModal={setOpenQuestionsModal} setModalClose={setModalClose} />
      </span>
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
