const list = document.querySelector('.js--todos-wrapper');
const template = (text, checked) => `
  <input type="checkbox"value="${checked}">
  <span class="todo-item__description">
    ${text}
  </span>
  <button button class="todo-item__delete">
    Видалити
  </button>
`;

export function renderTodoList(data) {
  list.innerHTML = ``;

  for (const todo of data) {
    const li = document.createElement('li');

    li.innerHTML = template(todo.text, todo.checked);

    list.appendChild(li);
  }
}

export function addTodo(data) {
  const li = document.createElement('li');

  li.innerHTML = template(data.text, data.checked);

  list.appendChild(li);
}