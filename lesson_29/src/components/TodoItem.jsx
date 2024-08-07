/* eslint-disable react/prop-types */

function TodoItem({ todo }) {
  return (
    <>
      <span className="todo-item__description">{todo.text}</span>
    </>
  );
}

export default TodoItem;
