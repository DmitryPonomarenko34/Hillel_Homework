import { useState, useCallback } from 'react';
import SmileysList from './components/SmileysList';
import SmileysItem from './components/SmileysItem';
import MyContext from './Context';
import './App.css';

const inithialState = [
  {dec: '128512', count: 0}, 
  {dec: '128522', count: 0}, 
  {dec: '128526', count: 0}, 
  {dec: '128564', count: 0}, 
  {dec: '128525', count: 0},
];

function App() {
  const [smileys, setSmileys] = useState([...inithialState]);
  const [winner, setWinner] = useState(null);

  const incrementCount = (dec) => {
    setSmileys(prevState => prevState.map((item) => {
      if (item.dec === dec) {
        return {
          ...item,
          count: item.count + 1
        }
      }

      return item;
    }));
  };

  const showWinner = () => {
    const smile = smileys.reduce((max, smiley) => smiley.count > max.count ? smiley : max, smileys[0]);

    localStorage.setItem('winner', JSON.stringify(smile));
    setWinner(smile);
  };

  const clear = () => {
    setSmileys([...inithialState]);
    setWinner(null)
    localStorage.clear();
  }

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Голосування за найкращий смайлик</h2>
      <MyContext.Provider value={{ incrementCount }}>
        <SmileysList items={smileys} />
        <div className='btns'>
          <button className='btn' onClick={showWinner}>Show Winner</button>
          <button className='btn' onClick={clear}>Clear</button>
        </div>
        {winner && <SmileysItem item={winner} />} 
      </MyContext.Provider>
    </div>
  );
}

export default App;
