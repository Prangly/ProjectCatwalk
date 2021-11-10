import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Characteristics = ({ characteristics, setCharacteristics }) => {
  console.log(characteristics);
  return (
    <h2>This is where characteristics will be entered.</h2>
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.shape({})
    .isRequired,
  setCharacteristics: PropTypes.shape({})
    .isRequired,
};

export default Characteristics;