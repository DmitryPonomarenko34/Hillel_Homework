/* eslint-disable react/prop-types */
import { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, onClick } = this.props;

    return (
      <>
        <input type="checkbox" checked={todo.checked} />
        <span className="todo-item__description">
          {todo.text}
        </span>
        <button onClick={ () => onClick(todo._id)} className="todo-item__delete">
          Видалити
        </button>
      </>
    );
  }
}

export default TodoItem;