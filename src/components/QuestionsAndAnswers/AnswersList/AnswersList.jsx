import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Answers from '../Answers/Answers';

const AnswersList = ({ answers }) => (
  <div>
    {answers.map((answer) => <Answers answer={answer} />)}
  </div>
);

export default AnswersList;
