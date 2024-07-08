function Clock(boxId) {
  const box = document.querySelector(`#${boxId}`);
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let timerId;

  box.textContent = `${hours}:${minutes}:${seconds}`;

  this.start = function () {
    const startTimer = () => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      if (hours === 25) {
        hours = 1;
      }

      box.textContent = `${hours}:${minutes}:${seconds}`;
    }

    timerId = setInterval(startTimer, 1000);
  }

  this.stop = function() {
    clearInterval(timerId);
  }
}

const clock = new Clock('clockBox');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

startBtn.addEventListener('click', () => {
  clock.start();
})

stopBtn.addEventListener('click', () => {
  clock.stop();
})
