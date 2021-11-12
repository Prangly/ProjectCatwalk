import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import ProductContext from '../../../ProductContext';

const Answers = ({
  answer, setAnswerHelpfulness, setReportAnswer, index,
}) => {
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const answerId = answer.answer_id;
  const helpfulId = `${answerId}/helpful`;
  const reportId = `${answerId}/reported`;
  const { setErrorCode, setIsError } = useContext(ProductContext);
  const updateAnswerHelpfulness = () => {
    axios.put(`/updateAnswerHelpfulness/${answerId}`)
      .then(window.localStorage[helpfulId] = 'clicked')
      .then(() => setAnswerHelpfulness((answerHelpfulness) => answerHelpfulness + 1))
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  const updateReportAnswer = () => {
    axios.put(`updateReportAnswer/${answerId}`)
      .then(window.localStorage[reportId] = 'clicked')
      .then(() => setReportAnswer((reportAnswer) => reportAnswer + 1))
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };

  return (
    <span>
      {index === 0 ? (
        <span>
          {'  '}
          {answer.body}
        </span>
      )
        : (
          <span id={styles.answerBody}>
            {'  '}
            {answer.body}
          </span>
        )}
      <div id={styles.answersAuthor}>
        by
        {' '}
        {answer.answerer_name.toLowerCase() === 'seller' ? <span id={styles.seller}>Seller</span> : <span>{answer.answerer_name}</span>}
        ,
        {' '}
        {months[answer.date.slice(5, 7)]}
        {' '}
        {parseInt(answer.date.slice(8, 10), 10)}
        ,
        {' '}
        {answer.date.slice(0, 4)}
        {' '}
        |
        {' '}
        Helpful?
        {window.localStorage[helpfulId] === 'clicked' ? (
          <button type="button" className={styles.clickedButton}>
            Yes
          </button>
        ) : (
          <button type="button" className={styles.button} onClick={() => updateAnswerHelpfulness()}>
            Yes
          </button>
        )}
        {' ('}
        {answer.helpfulness}
        {') '}
        |
        {window.localStorage[reportId] === 'clicked' ? (
          <button type="button" className={styles.clickedButton}>
            Report
          </button>
        ) : (
          <button type="button" className={styles.button} onClick={() => updateReportAnswer()}>
            Report
          </button>
        )}
      </div>
    </span>
  );
};

Answers.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
  setAnswerHelpfulness: PropTypes.func.isRequired,
  setReportAnswer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answers;
