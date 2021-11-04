import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './styles.css';

const QuestionsAndAnswersModal = ({ type, openModal, currentProductName, questionBody, setOpenModal }) => {

  return(
    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
      {type === 'answer' ?
      <div>
        <h1>Submit your Answer</h1>
        <h2> Product: {currentProductName} </h2>
        <h2> Question: {questionBody} </h2>
      </div>: null}
      <input type="button" value="close" onClick={() => setOpenModal(false)} />
    </Modal>
  )
};

export default QuestionsAndAnswersModal;
