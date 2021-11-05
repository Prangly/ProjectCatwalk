/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './styles.css';

const QuestionsAndAnswersModal = ({
  type, openModal, currentProductName, questionBody, setOpenModal,
}) => (
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
          <textarea type="text" cols="100" rows="10" maxLength="1000" required />
          <h3> What is your nickname: </h3>
          <textarea type="text" placeholder="Example: jack543!" cols="100" rows="1" maxLength="60" required />
          <br />
          For privary reasons, do not use your full name or email address.
          <h3> Your email: </h3>
          <textarea type="text" placeholder="Example: jack@email.com" cols="100" rows="1" maxLength="60" required />
          <br />
          For authentication reasons,you will not be emailed.
          <br />
          <h3>Upload your photos</h3>
          <button id={styles.addPhotos} type="button">
            Upload Photos
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
          <textarea type="text" cols="100" rows="10" maxLength="1000" required />
          <h3> What is your nickname: </h3>
          <textarea type="text" placeholder="Example: jack543!" cols="100" rows="1" maxLength="60" required />
          <br />
          For privary reasons, do not use your full name or email address.
          <h3> Your email: </h3>
          <textarea type="text" placeholder="Example: jack@email.com" cols="100" rows="1" maxLength="60" required />
          <br />
          For authentication reasons,you will not be emailed.
        </div>
      )}
    <button className={styles.submit} type="button">
      Submit
    </button>
  </Modal>
);
export default QuestionsAndAnswersModal;
