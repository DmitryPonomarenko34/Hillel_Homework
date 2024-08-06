/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ items }) {
  return (
    <ul className="js--todos-wrapper">
      {items.map((todo) => (
        <li key={todo._id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
