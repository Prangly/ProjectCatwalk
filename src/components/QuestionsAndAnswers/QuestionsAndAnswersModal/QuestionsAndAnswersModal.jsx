import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './styles.css';

const QuestionsAndAnswersModal = ({ openModal, currentProductName, questionBody }) => {
  return(
    <Modal isOpen={openModal}>
      <h1>Submit your Answer</h1>
      <h2> Product: {currentProductName} </h2>
      <h2> Question: {questionBody} </h2>
    </Modal>
  )
};

export default QuestionsAndAnswersModal;
