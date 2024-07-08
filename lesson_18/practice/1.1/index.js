const btn = document.querySelector('#start');
const box = document.querySelector('#stopwatch');
let num = 0;

btn.addEventListener('click', () => {
  setInterval(() => {
    box.textContent = num++;
  }, 1000)
});
