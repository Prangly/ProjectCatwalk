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

  const filterQuestion = (questionsFromAPI) => {
    if (searchInput.length > 2) {
      return questionsFromAPI.filter((question) => question.question_body.toLowerCase().includes(searchInput));
    }
    return questionsFromAPI;
  };

  // const getQuestions = (source) => {
  const getQuestions = () => {
    // axios.get(`http://127.0.0.1:3000/questions/${currentProduct.id}/50`, { cancelToken: source.token })
    axios.get(`/questions/${currentProduct.id}/${loadMoreQuestions}`)
      .then(({ data }) => (
        filterQuestion(data.results)
      ))
      .then((data) => {
        setCurrentProductQuestions(data);
      });
  };

  useEffect(() => {
    // const cancelToken = axios.CancelToken;
    // const source = cancelToken.source();
    // getQuestions(source);
    getQuestions();
  }, [currentProduct, questionHelpfulness, answerHelpfulness, modalClose, reportAnswer, searchInput, loadMoreQuestions]);

  return (
    <div id={styles.qAndA} className="ourContainer">
      <h1>Questions and Answers</h1>
      <QuestionsSearchInput changeSearchInput={changeSearchInput} />
      <QuestionsList currentProductQuestions={currentProductQuestions.filter((question) => currentProductQuestions.indexOf(question) < loadMoreQuestions - 1)} currentProductName={currentProduct.name} setQuestionHelpfulness={setQuestionHelpfulness} setAnswerHelpfulness={setAnswerHelpfulness} setModalClose={setModalClose} setReportAnswer={setReportAnswer} />
      {currentProductQuestions[loadMoreQuestions - 1] !== undefined ? <input type="button" value="More Answered Questions" className="ourButton" onClick={() => { setloadMoreQuestions(loadMoreQuestions + 2); }} />
        : null}
      <div id={styles.addAQuestion}>
        <input type="button" className="ourButton" value="Add a question" onClick={() => setOpenQuestionsModal(true)} />
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
