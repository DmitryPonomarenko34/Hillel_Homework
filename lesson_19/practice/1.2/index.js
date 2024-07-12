const list = document.querySelector('#list');
const avatarImg = document.querySelector('#avatar');

(async function () {
  const response = await fetch('https://api.github.com/users/DmitryPonomarenko34');
  const data = await response.json();

  avatarImg.setAttribute('src', data.avatar_url);
})();

(async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  for (const iterator of data) {
    const li = document.createElement('li');

    li.textContent = iterator.title;
    list.appendChild(li);
  }
})();