import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { add, useTodos } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const { list } = useTodos();

  const onSubmit = ({ text }, formikBag) => {
    dispatch(add({ text }));
    formikBag.resetForm();
  };

  return (
    <>
      <TodoForm onSubmit={onSubmit} />
      <TodoList items={list} />
    </>
  );
}
