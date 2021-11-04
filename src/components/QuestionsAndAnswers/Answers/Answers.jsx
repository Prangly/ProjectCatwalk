import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Answers = ({ answer }) => {
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

  return (
    <div>
      <div>
        <span id={styles.answer}>
          A:
        </span>
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
        <span>
          Helpful?
          {' '}
          <span className={styles.underline} onClick={() => console.log('Need to update the counter for answer helpfulness!')}>
            Yes
          </span>
          {' ('}
          {answer.helpfulness}
          {') '}
          |
          {' '}
          <span className={styles.underline} onClick={()=> console.log('Need to add an event listener to report the answer!')}>
            Report
          </span>
        </span>
      </div>
    </div>
  );
};

Answers.propTypes = {
  answer: PropTypes.shape({
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};

export default Answers;
