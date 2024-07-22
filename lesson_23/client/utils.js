const list = document.querySelector('.js--todos-wrapper');
const template = (text, checked) => `
  <input type="checkbox" value="${checked}" ${checked ? 'checked' : ''}>
  <span class="todo-item__description">
    ${text}
  </span>
  <button button class="todo-item__delete">
    Видалити
  </button>
`;

export function renderTodoList(data) {
  list.innerHTML = ``;
  console.log(data);
  for (const todo of data) {
    const li = document.createElement('li');
    console.log('checked', todo.checked);
    
    li.innerHTML = template(todo.text, todo.checked);
    li.setAttribute('id', todo._id);
    
    list.appendChild(li);
  }
}

export function addTodo(data) {
  const li = document.createElement('li');

  li.innerHTML = template(data.text, data.checked);
  li.setAttribute('id', data._id);
  list.appendChild(li);
};

export function updateTodo(data) {
  const listTodo = list.querySelector(`li[id="${data._id}"]`);

  listTodo.innerHTML = template(data.text, data.checked);
}

export function removeTodo(data) {
  const listTodo = list.querySelector(`li[id="${data._id}"]`);

  listTodo.remove();
}