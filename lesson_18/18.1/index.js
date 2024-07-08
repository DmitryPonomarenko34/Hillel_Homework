function Timer(boxId, time) {
  const box = document.querySelector(`#${boxId}`);
  const timerId = setInterval(start, 1000);
  let minutes = +time.slice(0, 2);
  let seconds = +time.slice(3, 5);

  box.textContent = `${minutes}:${seconds}`;

  function start() {
    seconds--;

    if (seconds === 0 && minutes !== 0) {
      seconds = 59;
      minutes--;

      return;
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(timerId);
    }

    box.textContent = `${minutes}:${seconds}`;
  }
}

const timer = new Timer('box', '00:04');