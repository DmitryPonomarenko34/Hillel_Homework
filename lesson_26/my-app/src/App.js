import './App.css';
import { Item } from './components/Item';

const array = [...new Array(9)];

function App() {
  const handleClick = (event) => {
    const index = event.target.getAttribute('key');

    array[index] = 'x';
  };

  console.log(array);

  return (
    <div className="container" onClick={handleClick}>
      {array.map((val, index) => <Item key={index} val={val}/>)}
    </div>
  );
}

export default App;
