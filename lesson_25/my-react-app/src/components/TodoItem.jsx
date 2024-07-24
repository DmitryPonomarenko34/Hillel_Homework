/* eslint-disable react/prop-types */
import { Component } from "react";
import { Context } from '../context';

class TodoItem extends Component {  
  static contextType = Context;

  render() {
    const { todo } = this.props;

    return (
      <>
        <input type="checkbox" defaultChecked={todo.checked}/>
        <span className="todo-item__description">
          {todo.text}
        </span>
        <button onClick={ () => this.context.removeTodo(todo._id)} className="todo-item__delete">
          Видалити
        </button>
      </>
    );
  }
}

export default TodoItem;