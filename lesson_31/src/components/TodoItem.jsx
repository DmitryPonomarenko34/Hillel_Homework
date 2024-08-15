/* eslint-disable react/prop-types */

import { useTodo } from "../store/todoSlice";

function TodoItem({ todo }) {
  const { fetchRemoveTodo, fetchChangeTodo } = useTodo();

  const onChangeChecked = (event) => {
    const checked = event.target.checked;

    fetchChangeTodo({ id: todo._id, body: { checked } });
  };

  return (
    <>
      <input
        onChange={onChangeChecked}
        type="checkbox"
        defaultChecked={todo.checked}
      />
      <span className="todo-item__description">{todo.text}</span>
      <button
        onClick={() => fetchRemoveTodo(todo._id)}
        className="todo-item__delete"
      >
        Видалити
      </button>
    </>
  );
}

export default TodoItem;
