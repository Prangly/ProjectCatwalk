/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';

const WriteAReview = ({ openModal, setOpenModal, currentProductId }) => {
  const postReview = () => {
    console.log('review to be added');
  };

  return (
    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
      <div>
        <h2>Add Your Review</h2>
        <textarea type="text" cols="100" rows="10" maxLength="1000"></textarea>
      </div>
    </Modal>
  );
};

export default WriteAReview;
