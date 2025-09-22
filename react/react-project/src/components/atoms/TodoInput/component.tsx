'use client';
import React, { useState } from 'react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value.trim() === '') return;
    onAdd(value);
    setValue('');
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};
