import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Characteristics = ({ characteristics, setCharacteristics }) => {
  console.log(characteristics);
  console.log(Object.entries(characteristics));
  console.log(Object.keys(characteristics));
  const namesOfChars = Object.keys(characteristics);
  const namesRows = namesOfChars.map((name) => (
    <tr>
      <td>{name}</td>
    </tr>
  ));
  return (
    <>
      <h2>This is where characteristics will be entered.</h2>
      <table id={styles.charsTable}>
        <thead id={styles.charsHead}>
          <td />
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </thead>
        {namesRows}
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
