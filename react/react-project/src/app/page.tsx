"use client";
import styles from "./page.module.css";
import React from "react";
export default function Home() {
  const [counter, setCounter] = React.useState<number>(0);
  const hanldeCounter = () => {
    setCounter(counter + 1);

  }
  return (
    <div className={styles.page}>
      <button onClick={hanldeCounter}>Click me!</button>
      <h1>Counter: {counter}</h1>
      
    </div>
  );
}
