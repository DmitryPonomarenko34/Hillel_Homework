const parent = document.querySelector('#parent');

parent.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    alert(event.target.textContent);
  }
})