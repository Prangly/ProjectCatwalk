import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Characteristics = ({ characteristics, setCharacteristics }) => {
  console.log(characteristics);
  let characteristicsList;

  return (
    <>
    <h2>This is where characteristics will be entered.</h2>
    <table id={styles.charsTable}>
      <thead id={styles.charsTableHead}>
      <td></td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      </thead>
    </table>
    </>
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.shape({})
    .isRequired,
  setCharacteristics: PropTypes.shape({})
    .isRequired,
};

export default Characteristics;
