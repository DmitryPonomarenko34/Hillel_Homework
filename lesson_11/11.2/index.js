const btn = document.querySelector('#btn');

function changeBtnColor() {
  btn.addEventListener('click', function () {
    btn.style.color === '' ? btn.style.color = 'red' : btn.style.color = '';
  })
}

document.addEventListener('DOMContentLoaded', () => {
  changeBtnColor()
});


