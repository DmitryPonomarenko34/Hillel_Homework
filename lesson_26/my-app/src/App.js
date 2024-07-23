import { useState } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    setText('');
    setTodos((prevState) => [...prevState, {checked: false, text}]);
  }

  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container">
      <h1>ToDoList</h1>
      <form form className="form js--form" onSubmit={onSubmit}>
        <input type="text" name="value" required className="form__input js--form__input" onChange={handleChangeText} />
        <button type="submit" className="form__btn">Додати</button>
      </form>
      <ul className="js--todos-wrapper">
        {todos.map((todo) => (
          <TodoItem text={todo.text} checked={todo.checked}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
