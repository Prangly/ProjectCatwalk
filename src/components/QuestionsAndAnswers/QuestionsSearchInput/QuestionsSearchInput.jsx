/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './styles.css';

const QuestionsSearchInput = (props) => {
  const [count, changeInput] = useState(0);
  console.log (count);
  return (
    <div>
      <input type="text" placeholder="Have a question? Search for answers..." className={styles.searchInput} onChange={()=> changeInput(event.target.value) />
      <input type="button" value="Search" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default QuestionsSearchInput;
