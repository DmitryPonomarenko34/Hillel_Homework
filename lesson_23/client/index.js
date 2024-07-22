import { createTodo, getTodoList } from "./api.js";
const form = document.querySelector('.js--form');

getTodoList();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  createTodo(data);

  form.reset();
})
