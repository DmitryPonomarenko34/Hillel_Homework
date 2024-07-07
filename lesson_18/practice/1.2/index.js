function Clock(boxId) {
  const box = document.querySelector(`#${boxId}`);
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  box.innerHTML = `
    <div id="timer">
      ${hours}:${minutes}:${seconds}
    </div>
    <button>
      Start
    </button>
    <button id="stop">
      Stop
    </button>
  `;

  const startTimer = () => {
    const timer = box.querySelector('#timer');
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes ++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours ++;
    }

    if (hours === 25) {
      hours = 1;
    }

    timer.textContent = `${hours}:${minutes}:${seconds}`;  
  }

  const timerId = setInterval(startTimer, 1000);

  this.stop = function() {
    const stopBtn = box.querySelector('#stop');

    stopBtn.addEventListener('click', () => {
      clearInterval(timerId);
    })
  }
}

const clock = new Clock('clock');

clock.stop();

