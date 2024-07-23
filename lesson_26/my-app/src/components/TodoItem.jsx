
export function TodoItem({text, checked}) {
  return (
    <>
      <input type="checkbox" checked={checked} />
      <span span className="todo-item__description">
        {text}
      </span>
      <button className="todo-item__delete">
        Видалити
      </button>
    </>
  );
}