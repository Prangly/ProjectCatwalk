/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './styles.css';

const QuestionsAndAnswersModal = ({
  type, openModal, currentProductName, questionId, questionBody, setOpenModal, currentProductId, setModalClose,
}) => {
  const [answerBodyInfo, setAnswerBodyInfo] = useState('');
  const [answerNicknameInfo, setAnswerNickNameInfo] = useState('');
  const [answerEmailInfo, setAnswerEmailInfo] = useState('');
  const answerInfo = {
    body: answerBodyInfo, name: answerNicknameInfo, email: answerEmailInfo, photos: [],
  };

  const postAnswer = () => {
    axios.post(`/postAnswer/${questionId}`, answerInfo)
      .then(() => setModalClose((modalClose) => modalClose + 1));
  };

  const [questionBodyInfo, setQuestionBodyInfo] = useState('');
  const [questionNicknameInfo, setQuestionNicknameInfo] = useState('');
  const [questionEmailInfo, setQuestionEmailInfo] = useState('');
  const questionInfo = {
    body: questionBodyInfo, name: questionNicknameInfo, email: questionEmailInfo, product_id: currentProductId,
  };
  // const [formData, setFormData] = useState({
  //   answer: '',
  //   name: '',
  // })
  const postQuestion = () => {
    axios.post('/postQuestion', questionInfo)
      .then(() => setModalClose((modalClose) => modalClose + 1));
  };

  // const onChange = (e) => {
  //   let newFormData = { ...formData}
  //   newFormData[e.target.name] = e.target.value;
  //   setFormData(newFormData)
  // }

  return (
    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
      <input className={styles.close} type="button" value="X" onClick={() => setOpenModal(false)} />
      {type === 'answer'
        ? (
          <div>
            <h1>Submit your Answer</h1>
            <h2>
              {' '}
              Product:
              {' '}
              {currentProductName}
              {' '}
            </h2>
            <h2>
              {' '}
              Question:
              {' '}
              {questionBody}
              {' '}
            </h2>
            <h3> Your Answer: </h3>
            <textarea type="text" cols="100" rows="10" maxLength="1000" required onChange={(event) => setAnswerBodyInfo(event.target.value)} />
            <h3> What is your nickname: </h3>
            <textarea type="text" placeholder="Example: jack543!" cols="100" rows="1" maxLength="60" required onChange={(event) => setAnswerNickNameInfo(event.target.value)} />
            <br />
            For privary reasons, do not use your full name or email address.
            <h3> Your email: </h3>
            <textarea type="text" placeholder="Example: jack@email.com" cols="100" rows="1" maxLength="60" required onChange={(event) => setAnswerEmailInfo(event.target.value)} />
            <br />
            For authentication reasons,you will not be emailed.
            <br />
            <h3>Upload your photos</h3>
            <button id={styles.addPhotos} type="button">
              Upload Photos
            </button>
            <br />
            <button className={styles.submit} type="button" onClick={() => postAnswer()}>
              Submit
            </button>
          </div>
        )
        : (
          <div>
            <h1>Ask your Question</h1>
            <h2>
              {' '}
              About the
              {' '}
              {currentProductName}
              {' '}
            </h2>
            <h3>Your Questions</h3>
            <textarea type="text" cols="100" rows="10" maxLength="1000" required onChange={(event) => setQuestionBodyInfo(event.target.value)} />
            <h3> What is your nickname: </h3>
            <textarea type="text" placeholder="Example: jack543!" cols="100" rows="1" maxLength="60" required onChange={(event) => setQuestionNicknameInfo(event.target.value)} />
            <br />
            For privary reasons, do not use your full name or email address.
            <h3> Your email: </h3>
            <textarea type="text" placeholder="Example: jack@email.com" cols="100" rows="1" maxLength="60" required onChange={(event) => setQuestionEmailInfo(event.target.value)} />
            <br />
            For authentication reasons,you will not be emailed.
            <br />
            <button className={styles.submit} type="button" onClick={() => postQuestion()}>
              Submit
            </button>
          </div>
        )}
    </Modal>
  );
};

QuestionsAndAnswersModal.propTypes = {
  type: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  currentProductName: PropTypes.bool.isRequired,
  questionId: PropTypes.number.isRequired,
  questionBody: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
  setModalClose: PropTypes.func.isRequired,
};

export default QuestionsAndAnswersModal;
