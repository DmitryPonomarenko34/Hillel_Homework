import { createTodoAsync, getTodoListAsync, removeTodoAsync, updateTodoAsync } from "./api.js";
const form = document.querySelector('.js--form');
const formInput = form.querySelector('input');
const list = document.querySelector('.js--todos-wrapper');

getTodoListAsync();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (!data.value && !formInput.classList.contains('error')) {
    formInput.classList.add('error');
    return
  }

  formInput.classList.remove('error');

  createTodoAsync(data);

  form.reset();
})

list.addEventListener('click', (event) => {
  const target = event.target;
  const parentElem = target.parentElement;
  const todoId = parentElem.getAttribute('id');
  const itemText = parentElem.querySelector('.todo-item__description').textContent;
  
  if (target.nodeName === 'INPUT') {
    console.log('tag', target.checked);
    
    const data = {text: itemText.trim(), checked: target.checked}    

    updateTodoAsync(todoId, data);
  }

  if (target.nodeName === 'BUTTON') {    
    removeTodoAsync(todoId);
  }
});