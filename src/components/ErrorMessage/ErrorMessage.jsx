import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

function ErrorMessage({ errorCode }) {
  return (
    <div data-testid="errorMessage" id={styles.errorMessage}>
      <h1>{`Sorry, there's been some sort of error...`}</h1>
      <h2>{`Error Code: ${errorCode}`}</h2>
      <h3>Please try again</h3>
    </div>
  );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  errorCode: PropTypes.number.isRequired,
};
