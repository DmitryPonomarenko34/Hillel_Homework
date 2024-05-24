const list = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');

list.addEventListener('click', (event) => {
  const target = event.target;
  if (target.nodeName === 'BUTTON' && confirm(`Ви точно хочете видалити ${target.parentElement.querySelector('p').textContent} ?`)) {        
    target.parentElement.remove();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.querySelector('input');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const button = document.createElement('button');

  list.appendChild(li);
  li.appendChild(p);
  li.appendChild(button);

  p.textContent = input.value;
  button.textContent = 'Видалити';

  input.value = '';
})