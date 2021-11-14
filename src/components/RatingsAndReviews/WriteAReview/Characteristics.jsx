/* eslint-disable radix */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Characteristics = ({ characteristics, setCharacteristicsList }) => {
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

  const selectCharValue = (event) => {
    const charsPropsList = event.target.value.split(',');
    const characteristicKeyValuePair = [charsPropsList[1], parseInt(charsPropsList[2])];
    setCharacteristicsList((prevCharacteristicsList) => [...prevCharacteristicsList, characteristicKeyValuePair]);
  };

  const characteristicProps = Object.entries(characteristics);
  const characteristicsNamesAndIdsList = characteristicProps.map((property) => [property[0], property[1].id]);

  const charsRows = characteristicsNamesAndIdsList.map((nameAndId) => (
    <tr>
      <td>
        {nameAndId[0]}
        <br />
      </td>
      <td>
        {characteristicsDefs[nameAndId[0]]['1']}
        <br />
        <input type="radio" name={`${nameAndId[0]}`} onClick={(event) => selectCharValue(event)} value={`${nameAndId},1`} />
      </td>
      <td>
        {characteristicsDefs[nameAndId[0]]['2']}
        <br />
        <input type="radio" name={`${nameAndId[0]}`} onClick={(event) => selectCharValue(event)} value={`${nameAndId},2`} />
      </td>
      <td>
        {characteristicsDefs[nameAndId[0]]['3']}
        <br />
        <input type="radio" name={`${nameAndId[0]}`} onClick={(event) => selectCharValue(event)} value={`${nameAndId},3`} />
      </td>
      <td>
        {characteristicsDefs[nameAndId[0]]['4']}
        <br />
        <input type="radio" name={`${nameAndId[0]}`} onClick={(event) => selectCharValue(event)} value={`${nameAndId},4`} />
      </td>
      <td>
        {characteristicsDefs[nameAndId[0]]['5']}
        <br />
        <input type="radio" name={`${nameAndId[0]}`} onClick={(event) => selectCharValue(event)} value={`${nameAndId},5`} />
      </td>
    </tr>
  ));

  return (
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
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.shape({})
    .isRequired,
  setCharacteristicsList: PropTypes.shape([])
    .isRequired,
};

export default Characteristics;
