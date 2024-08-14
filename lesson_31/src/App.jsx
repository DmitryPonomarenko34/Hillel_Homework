import { useEffect } from "react";
import { useTodo } from "./store/todoSlice";
import TodoList from "./components/TodoList";

export default function App() {
  const { todo, fetchTodos } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoList items={todo.items} />
    </>
  );
}
