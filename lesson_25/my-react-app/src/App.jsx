import { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoListAsync, createTodoAsync, removeTodoAsync, updateTodoAsync } from './api/api';
import { Context } from './context';
import SmileysList from './components/SmileysList';
import SmileysItem from './components/SmileysItem';
import Timer from './components/Timer';
import './App.css'

const inithialState = [
  {dec: '128512', count: 0}, 
  {dec: '128522', count: 0}, 
  {dec: '128526', count: 0}, 
  {dec: '128564', count: 0}, 
  {dec: '128525', count: 0},
];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      todoItems: [], 
      text: '', 
      smileys: [...inithialState],
      smile: null,
      timer: new Date().toLocaleTimeString(), 
      isVisible: true,
    };
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

  incrementCount = (dec) => {
    this.setState(prevState => ({smileys: prevState.smileys.map((item) => {
      if (item.dec === dec) {
        return {
          ...item,
          count: item.count + 1
        }
      }

      return item;
    })}))
  }

  showWinner = () => {
    const { smileys } = this.state;
    const smile = smileys.reduce((max, smiley) => smiley.count > max.count ? smiley : max, smileys[0]);

    localStorage.setItem('winner', JSON.stringify(smile));
    this.setState({smile});
  }

  clear = () => {
    this.setState({smile: null, smileys: [...inithialState]});
    localStorage.clear();
  }

  updateTimer = () => {
    this.setState({timer: new Date().toLocaleTimeString() });
  }

  toggleVisible = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}));
  }

  render() {
    const { todoItems, smileys, smile, timer, isVisible } = this.state;
    const { removeTodo, updateTodo, incrementCount, showWinner, clear, updateTimer, toggleVisible } = this;

    return (
      <>
        <div className='container'>
          <Timer timer = {timer} isVisible={isVisible} updateTimer= {updateTimer} toggleVisible={toggleVisible} />
          <h1>ToDoList</h1>
          <TodoForm value={this.state.text} onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)} />
          <Context.Provider value={ { removeTodo, updateTodo, incrementCount } } >
            <TodoList items={todoItems} />
            <h2>Голосування за найкращий смайлик</h2>
            <SmileysList items={smileys} />
            <div className='btns'>
              <button className='btn' onClick={showWinner}>Show Winner</button>
              <button className='btn' onClick={clear}>Clear</button>
            </div>
            {smile && <SmileysItem item={smile} />} 
          </Context.Provider>
        </div>
      </>
    )
  }
}

export default App;
