/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';

const WriteAReview = ({ openModal }) => {
  const postReview = () => {
    console.log('review to be added');
  };

  return (
    <Modal isOpen={openModal} />
  );
};

export default WriteAReview;
