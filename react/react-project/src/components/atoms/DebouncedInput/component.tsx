'use client';
import React from 'react';
import { DebouncedInputProps } from './types';

export const DebouncedInput = ({ onChange, delay = 500 }: DebouncedInputProps) => {
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    const handler = setTimeout(() => {
      onChange(input);
    }, delay);

    return () => clearTimeout(handler); // cleanup: 이전 타이머 제거
  }, [input, onChange, delay]);

  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};
