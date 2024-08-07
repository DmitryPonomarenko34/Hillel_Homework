import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);

  const onSubmit = (payload, formikBag) => {
    dispatch({ type: "ADD_TODO", payload });
    formikBag.resetForm();
  };

  return (
    <>
      <h1>Value: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button
        style={{ marginBottom: "40px" }}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <TodoForm onSubmit={onSubmit} />
      <TodoList items={todos} />
    </>
  );
}
