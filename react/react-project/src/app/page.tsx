'use client';
import { TodoInput, TodoList } from '@/components';
import styles from './page.module.css';
import React from 'react';

export type Todo = {
  id: number;
  text: string;
};

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div className={styles.page}>
      <h1>Todo List (Props 버전)</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
