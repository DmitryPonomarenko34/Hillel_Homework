/* eslint-disable react/prop-types */
import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="js--todos-wrapper">
        {items.map((todo) => <li key={todo._id}><TodoItem todo={todo} /></li> )}
      </ul>
    );
  }
}

export default TodoList;