import { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoListAsync, createTodoAsync, removeTodoAsync, updateTodoAsync } from './api/api';
import { Context } from './context';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { todoItems: [], text: '' };
  }

  componentDidMount() {
    getTodoListAsync(this.setState.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    createTodoAsync(this.state.text, this.setState.bind(this));

    this.setState({text: ''});
  }

  onChange(event) {
    this.setState({text: event.target.value});
  }

  removeTodo = (id) => {
    removeTodoAsync(id, this.setState.bind(this));
  }

  updateTodo = (id, body) => {
    updateTodoAsync(id, body, this.setState.bind(this));
  }

  render() {
    const { todoItems } = this.state;
    const { removeTodo, updateTodo } = this;

    return (
      <>
        <div className='container'>
          <h1>ToDoList</h1>
          <TodoForm value={this.state.text} onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)} />
          <Context.Provider value={ { removeTodo, updateTodo } } >
            <TodoList items={todoItems} />
          </Context.Provider>
        </div>
      </>
    )
  }
}

export default App;
