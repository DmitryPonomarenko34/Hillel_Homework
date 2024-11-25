import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function TodoListPage() {
  const [todos, setTodos] = useState([{ checked: false, text: 'First task' }]);

  const onSubmit = ({ text }, formikBag) => {
    console.log('Form values:', text);

    setTodos((prevState) => [...prevState, { text }]);
    formikBag.resetForm();
  };

  return (
    <>
      <TodoForm onSubmit={onSubmit} />
      <TodoList items={todos} />
    </>
  );
}
