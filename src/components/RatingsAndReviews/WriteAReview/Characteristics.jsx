import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Characteristics = ({ characteristics, setCharacteristics }) => {
  console.log(characteristics);
  console.log(Object.entries(characteristics));
  console.log(Object.keys(characteristics));

  const characteristicsDefs = {
    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide',
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    Length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
    Fit: {
      1: 'Too tight',
      2: 'Slightly tight',
      3: 'Perfect',
      4: 'Slightly too big',
      5: 'Too big',
    },
  };
  const namesOfChars = Object.keys(characteristics);

  const selectCharValue = (event) => {
    console.log(event);
  };
  const charsRows = namesOfChars.map((name) => (
    <tr>
      <td>
        {name}
        <br />
      </td>
      <td>
        {characteristicsDefs[name]['1']}
        <br />
        <input type="radio" name={`${name}`} onClick={(event) => selectCharValue(event)} />
      </td>
      <td>
        {characteristicsDefs[name]['2']}
        <br />
        <input type="radio" name={`${name}`} />
      </td>
      <td>
        {characteristicsDefs[name]['3']}
        <br />
        <input type="radio" name={`${name}`} />
      </td>
      <td>
        {characteristicsDefs[name]['4']}
        <br />
        <input type="radio" name={`${name}`} />
      </td>
      <td>
        {characteristicsDefs[name]['5']}
        <br />
        <input type="radio" name={`${name}`} />
      </td>
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
        {charsRows}
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
