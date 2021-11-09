import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';

const Answers = ({ answer, setAnswerHelpfulness, setReportAnswer }) => {
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

  const updateAnswerHelpfulness = () => {
    axios.put(`/updateAnswerHelpfulness/${answerId}`)
      .then(window.localStorage[helpfulId] = 'clicked')
      .then(() => setAnswerHelpfulness((answerHelpfulness) => answerHelpfulness + 1));
  };

  const updateReportAnswer = () => {
    axios.put(`updateReportAnswer/${answerId}`)
      .then(window.localStorage[reportId] = 'clicked')
      .then(() => setReportAnswer((reportAnswer) => reportAnswer + 1));
  };

  return (
    <div>
      <div id={styles.answerBody}>
        {'  '}
        {answer.body}
      </div>
      <div id={styles.answersAuthor}>
        by
        {' '}
        {answer.answerer_name}
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
        ) }
      </div>
    </div>
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
};

export default Answers;
