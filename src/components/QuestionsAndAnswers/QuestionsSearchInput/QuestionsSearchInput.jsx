/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './styles.css';

const QuestionsSearchInput = (props) => {
  const [input, changeInput] = useState();
  const [submit, setInput] = useState();

  return (
    <div>
      <input type="text" placeholder="Have a question? Search for answers..." className={styles.searchInput} onChange={() => changeInput(event.target.value)} />
      <input type="button" value="Search" onClick={() => setInput('Submitted')} />
    </div>
  );
};

export default QuestionsSearchInput;
