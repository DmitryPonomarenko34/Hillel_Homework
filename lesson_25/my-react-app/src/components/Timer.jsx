/* eslint-disable react/prop-types */
import { Component } from "react";

class Timer extends Component {
  render() {
    const { timer, isVisible, updateTimer, toggleVisible } = this.props;

    return (
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
        <div>
          {isVisible && (
            <>
              <div style={{textAlign: 'center'}}>
                {timer}
              </div>
              <button onClick={updateTimer}>Оновити</button>
            </>
          )}
          <button onClick={toggleVisible}>Приховати / Показати</button>
        </div>
      </div>
    );
  }
}

export default Timer;