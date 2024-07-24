import { Component } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoListAsync, createTodoAsync } from './api/api';
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

  render() {
    const { todoItems } = this.state;

    return (
      <>
        <div className='container'>
          <h1>ToDoList</h1>
          <TodoForm value={this.state.text} onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)} />
          <TodoList items={todoItems} />
        </div>
      </>
    )
  }
}

export default App;
