import { createTodoAsync, getTodoListAsync, updateTodoAsync } from "./api.js";
const form = document.querySelector('.js--form');
const list = document.querySelector('.js--todos-wrapper');

getTodoListAsync();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  createTodoAsync(data);

  form.reset();
})

list.addEventListener('click', (event) => {
  const target = event.target;
  const parentElem = target.parentElement;
  const todoId = parentElem.getAttribute('id');
  console.log(todoId);
  const itemText = parentElem.querySelector('.todo-item__description').textContent;
  
  if (target.nodeName === 'INPUT') {
    console.log('tag', target.checked);
    
    const data = {text: itemText, checked: target.checked}    

    updateTodoAsync(todoId, data);
  }

});