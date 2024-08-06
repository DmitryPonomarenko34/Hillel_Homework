import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = ({ text }, formikBag) => {
    console.log("Form values:", text);

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
