/* eslint-disable react/prop-types */
import { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <>
        <form className="form js--form">
          <input type="text" name="value" required className="form__input js--form__input" />
          <button type="submit" className="form__btn">Додати</button>
        </form>
      </>
    );
  }
}

export default TodoForm;