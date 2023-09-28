import React, { useState } from 'react';
// import './App.css';
import styles from "./app.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1)

  const inc = () => {
    setCounter(counter + number);
  };
  const inp = (event) => {
    const num = Number(event.target.value);
    setNumber(num);
  }
  return (
    <div className={styles.body}>
      <div className={styles.App}>
        <h1 style={{ color: counter < 0 ? "red" : "#63da75" }}>{counter}</h1>
        <input className={styles.input} type="number" id="number" onChange={inp}></input>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={inc}>+</button>
          <button className={styles.button} onClick={() => setCounter(0)}>reset</button>
          <button className={styles.button} onClick={() => setCounter(counter - number)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
