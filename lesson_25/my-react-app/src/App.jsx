import { Component } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
// import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { timer: new Date().toLocaleTimeString(), isVisible: true, todoItems: [] };
  }

  updateTimer() {
    this.setState({timer: new Date().toLocaleTimeString() });
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timer, isVisible, todoItems } = this.state;
    return (
      <>
        {isVisible && timer}
        <button onClick={this.updateTimer.bind(this)}>Оновити</button>
        <button onClick={() => this.setState({ isVisible: !isVisible })}>Приховати / Показати</button>

        <div>
          <h1>ToDoList</h1>
          <TodoForm />
          <ul className="js--todos-wrapper">
            {todoItems.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
          </ul>
        </div>
      </>
    )
  }
}

export default App;
