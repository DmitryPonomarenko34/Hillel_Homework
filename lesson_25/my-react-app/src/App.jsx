import { Component } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoListAsync } from './api/api';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { todoItems: [] };
  }

  componentDidMount() {
    getTodoListAsync(this.setState.bind(this))
  }

  render() {
    const { todoItems } = this.state;
    return (
      <>
        <div className='container'>
          <h1>ToDoList</h1>
          <TodoForm />
          <TodoList items={todoItems} />
        </div>
      </>
    )
  }
}

export default App;
