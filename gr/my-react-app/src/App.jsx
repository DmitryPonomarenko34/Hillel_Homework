import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { timer: new Date().toString(), isVisible: true };
  }

  updateTimer() {
    this.setState({timer: new Date().toString() });
  }

  componentDidMount() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  render() {
    const { timer, isVisible } = this.state;
    return (
      <>
        {isVisible && timer}
        <button onClick={this.updateTimer.bind(this)}>Update</button>
        <button onClick={() => this.setState({ isVisible: !isVisible })}>Приховати / Показати</button>
      </>
    )
  }
    
}

export default App
