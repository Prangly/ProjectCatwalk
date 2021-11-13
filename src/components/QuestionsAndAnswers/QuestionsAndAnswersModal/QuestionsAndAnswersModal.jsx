import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './styles.css';
import ProductContext from '../../../ProductContext';

const QuestionsAndAnswersModal = ({
  type,
  openModal,
  currentProductName,
  questionId,
  questionBody,
  setOpenModal,
  currentProductId,
  setModalClose,
}) => {
  const [answerBodyInfo, setAnswerBodyInfo] = useState(null);
  const [answerNicknameInfo, setAnswerNickNameInfo] = useState(null);
  const [answerEmailInfo, setAnswerEmailInfo] = useState(null);
  const answerInfo = {
    body: answerBodyInfo, name: answerNicknameInfo, email: answerEmailInfo, photos: [],
  };
  const [answerBodyRequired, setAnswerBodyRequired] = useState(false);
  const [answerNicknameRequired, setAnswerNicknameRequired] = useState(false);
  const [answerEmailRequired, setAnswerEmailRequired] = useState(false);
  const { setIsError, setErrorCode } = useContext(ProductContext);

  const postAnswer = () => {
    setAnswerBodyRequired(false);
    setAnswerNicknameRequired(false);
    setAnswerEmailRequired(false);
    if (answerInfo.body === null) {
      setAnswerBodyRequired(true);
    }
    if (answerInfo.name === null) {
      setAnswerNicknameRequired(true);
    }
    if (answerInfo.email === null || !answerInfo.email.includes('@')) {
      setAnswerEmailRequired(true);
    } else {
      axios.post(`/postAnswer/${questionId}`, answerInfo)
        .then(() => setModalClose((modalClose) => modalClose + 1))
        .catch((err) => {
          setErrorCode(err.response.status);
          setIsError(true);
        });
    }
  };

  const [questionBodyInfo, setQuestionBodyInfo] = useState(null);
  const [questionNicknameInfo, setQuestionNicknameInfo] = useState(null);
  const [questionEmailInfo, setQuestionEmailInfo] = useState(null);
  const questionInfo = {
    body: questionBodyInfo,
    name: questionNicknameInfo,
    email: questionEmailInfo,
    product_id: currentProductId,
  };
  const [questionBodyRequired, setQuestionBodyRequired] = useState(false);
  const [questionNicknameRequired, setQuestionNicknameRequired] = useState(false);
  const [questionEmailRequired, setQuestionEmailRequired] = useState(false);

  const postQuestion = () => {
    setQuestionBodyRequired(false);
    setQuestionNicknameRequired(false);
    setQuestionEmailRequired(false);
    if (questionInfo.body === null) {
      setQuestionBodyRequired(true);
    }
    if (questionInfo.name === null) {
      setQuestionNicknameRequired(true);
    }
    if (questionInfo.email === null || !questionInfo.email.includes('@')) {
      setQuestionEmailRequired(true);
    } else {
      axios.post('/postQuestion', questionInfo)
        .then(() => setModalClose((modalClose) => modalClose + 1))
        .catch((err) => {
          setErrorCode(err.response.status);
          setIsError(true);
        });
    }
  };

  useEffect(() => {
  }, [questionBodyRequired, questionNicknameRequired, questionEmailRequired]);

  // const onChange = (e) => {
  // const [formData, setFormData] = useState({
  //   answer: '',
  //   name: '',
  // })
  //   let newFormData = { ...formData}
  //   newFormData[e.target.name] = e.target.value;
  //   setFormData(newFormData)
  // }

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal style={modalStyles} isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
      <input id={styles.close} type="button" value="X" onClick={() => setOpenModal(false)} />
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
            <h3>
              {' '}
              Your Answer:
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {answerBodyRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              cols="100"
              rows="10"
              maxLength="1000"
              required
              onChange={(event) => setAnswerBodyInfo(event.target.value)}
            />
            <h3>
              {' '}
              What is your nickname:
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {answerNicknameRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              placeholder="Example: jack543!"
              cols="100"
              rows="1"
              maxLength="60"
              required
              onChange={(event) => setAnswerNickNameInfo(event.target.value)}
            />
            <br />
            For privary reasons, do not use your full name or email address.
            <h3>
              {' '}
              Your email:
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {answerEmailRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              placeholder="Example: jack@email.com"
              cols="100"
              rows="1"
              maxLength="60"
              required
              onChange={(event) => setAnswerEmailInfo(event.target.value)}
            />
            <br />
            For authentication reasons, you will not be emailed.
            <br />
            <h3>Upload your photos</h3>
            <button id={styles.addPhotos} type="button">
              Upload Photos
            </button>
            <br />
            <button className={`${styles.submit} ourButton`} type="button" onClick={() => { postAnswer(); setOpenModal(false); }}>
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
            <h3>
              Your Questions
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {questionBodyRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              cols="100"
              rows="10"
              maxLength="1000"
              required
              onChange={(event) => setQuestionBodyInfo(event.target.value)}
            />
            <h3>
              {' '}
              What is your nickname:
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {questionNicknameRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              placeholder="Example: jack543!"
              cols="100"
              rows="1"
              maxLength="60"
              required
              onChange={(event) => setQuestionNicknameInfo(event.target.value)}
            />
            <br />
            For privary reasons, do not use your full name or email address.
            <h3>
              {' '}
              Your email:
              {' '}
              <span className={styles.required}>*</span>
              {'  '}
              {questionEmailRequired
                ? <div className={styles.required}>You must enter this field.</div>
                : null}
            </h3>
            <textarea
              type="text"
              placeholder="Example: jack@email.com"
              cols="100"
              rows="1"
              maxLength="60"
              required
              onChange={(event) => setQuestionEmailInfo(event.target.value)}
            />
            <br />
            For authentication reasons, you will not be emailed.
            <br />
            <button className={`${styles.submit} ourButton`} type="button" onClick={() => { postQuestion(); setOpenModal(false); }}>
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
