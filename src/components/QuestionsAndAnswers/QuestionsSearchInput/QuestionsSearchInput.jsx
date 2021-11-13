/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const QuestionsSearchInput = ({ changeSearchInput }) => (
  <div>
    <input
      data-testid="questionsSearchInput"
      type="text"
      placeholder="Have a question? Search for answers..."
      className={styles.searchInput}
      onChange={(event) => changeSearchInput(event.target.value)}
    />
  </div>
);

export default QuestionsSearchInput;

QuestionsSearchInput.propTypes = {
  changeSearchInput: PropTypes.string.isRequired,
};
