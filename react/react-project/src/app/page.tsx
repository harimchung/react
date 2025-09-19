'use client';
import { CounterWithPrev, DebouncedInput } from '@/components';
import styles from './page.module.css';
import React from 'react';

export default function Home() {
  const [counter, setCounter] = React.useState<number>(0);
  const [search, setSearch] = React.useState('');
  const [count, setCount] = React.useState(0);

  const hanldeCounter = () => {
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    console.log('Counter mounted or count changed:', counter);

    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [counter]);

  return (
    <div className={styles.page}>
      <button onClick={hanldeCounter}>Click me!</button>
      <h1>Counter: {counter}</h1>

      <DebouncedInput onChange={setSearch} />
      <p>Search term: {search}</p>
      <CounterWithPrev />
    </div>
  );
}
