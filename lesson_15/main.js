const form = document.querySelector('.js--form');
const list = document.querySelector('.js--todos-wrapper');
const getTodos = () => sessionStorage.getItem('todos');
const todos = getTodos();

if (todos) {
  const todoItems = JSON.parse(todos);
  
  for (const todo of todoItems) {
    const li = document.createElement('li');

    console.log('todo', todo);

    li.classList.add('todo-item');
    todo.complete === 'true' ? li.classList.add('todo-item--checked') : li.classList.remove('todo-item--checked');
    
    li.setAttribute('id', todo.id);

    li.innerHTML = `
      <input type="checkbox">
      <span class="todo-item__description">${todo.value}</span>
      <button class="todo-item__delete">Видалити</button>
    `;

    list.appendChild(li);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const id = Math.floor(Math.random() * 100);

  formData.append('id', id);
  formData.append('complete', false);

  const data = Object.fromEntries(formData.entries());

  saveToSessionStorage(data);
});

list.addEventListener('click', (event) => {
  console.log(event.target.nodeName);
  if (event.target.nodeName = 'INPUT' && event.target.type === 'checkbox') {
    const id = event.target.parentElement.getAttribute('id');
    
    changeTodoStatus(id);

    return;
  }

  if (event.target.nodeName = 'BUTTON') {
    const id = event.target.parentElement.getAttribute('id');

    removeTodoItem(id);
  }
});

function saveToSessionStorage(data) {
  const todoItems = getTodos();
 
  if (todoItems) {
    sessionStorage.setItem('todos', JSON.stringify([...JSON.parse(todoItems), data]));

    return;
  }

  sessionStorage.setItem('todos', JSON.stringify([data]));
}

function changeTodoStatus(id) {
  const todos = getTodos();
  const todoItems = JSON.parse(todos);

  const newItems = todoItems.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        complete: todo.complete === 'true' ? 'false' : 'true',
      }
    }

    return todo;
  })

  sessionStorage.setItem('todos', JSON.stringify(newItems));
}

function removeTodoItem(id) {
  const todos = getTodos();
  const todoItems = JSON.parse(todos);
  const todo = todoItems?.find((todo) => todo.id === id);

  const confirm = window.confirm(`Ви дійсно хочете видалити таску ${todo.value} ?`);

  if (!confirm) {
    return;
  }

  const newItems = todoItems.filter((todo) => todo.id !== id);

  sessionStorage.setItem('todos', JSON.stringify(newItems));
}
