/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
  return (
    <ul className="js--todos-wrapper">
      {items?.map((todo, index) => (
        <li className="todo-item" key={index}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
