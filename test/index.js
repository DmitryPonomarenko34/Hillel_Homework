  const form = document.querySelector('#create');
  const formEdit = document.querySelector('#edit');
  const inputName = formEdit.querySelector('input[name=name]');
  const inputPhone = formEdit.querySelector('input[name=phone]');
  const inputAge = formEdit.querySelector('input[name=age]');
  const table = document.querySelector('#table');
  const modalBtn = document.querySelector('#createBtn'); 
  const infoList = document.querySelector('#info');
  const getUsers = () => sessionStorage.getItem('users');
  const users = getUsers();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const users = getUsers();
    const id  = new Date().getMilliseconds();
    const formData = new FormData(form);

    formData.append('id', id);

    if (users === null) {
      sessionStorage.setItem('users', JSON.stringify([Object.fromEntries(formData.entries())]))
      console.log('true');

      return;
    }
    
    const values = JSON.parse(users);
    sessionStorage.setItem('users', JSON.stringify([...values, Object.fromEntries(formData.entries())]));
  });

  modalBtn.addEventListener('click', () => {
    form.reset();
    form.classList.add('active');
    formEdit.classList.remove('active');
  });

  if (users) {
    const usersData = JSON.parse(users);

    for (const user of usersData) {
      const tr = document.createElement('tr');
      
      table.appendChild(tr);
      tr.setAttribute('id', user.id);

      tr.innerHTML = `
        <td id="${user.id}">${user.id}</td>
        <div>
          <button id="view">View</button>
          <button id="edit">Edit</button>
          <button id="delete">Delete</button>
        </div>
      `;

      tr.addEventListener('click', (event) => {
        const target = event.target;
        const id = event.currentTarget.getAttribute('id');
        const isViewBtn = target.getAttribute("id") === 'view';
        const isEditBtn = target.getAttribute("id") === 'edit';
        const isDeleteBtn = target.getAttribute("id") === 'delete';
        const user = usersData.find((user) => user.id === id);

        switch (true) {
          case isViewBtn:           

            infoList.innerHTML = '';

            for (let key in user) {
              const li = document.createElement('li');
              const value = user[key];

              li.textContent = `${key}: ${value}`;
              infoList.appendChild(li);
            }

          break;
          case isEditBtn:
            formEdit.classList.add('active');
            form.classList.remove('remove');
            inputName.value = user.name;
            inputPhone.value = user.phone;
            inputAge.value = user.age;

            formEdit.addEventListener('submit', (event) => {
              event.preventDefault();
              const formData = new FormData(formEdit);
              const updateValues = Object.fromEntries(formData.entries());
              
              const filterUsers = usersData.map((user) => {
                if (user.id === id) {
                  return {
                    ...user,
                   ...updateValues,
                  }
                }

                return user;
              });

              sessionStorage.setItem('users', JSON.stringify(filterUsers))
            });

            break;
          case isDeleteBtn:
            const confirm = window.confirm(`Ви дійсно хочете видалити користувача ${user.name} ?`);
            if (!confirm) {
              break;
            }

            const filterUsers = usersData.filter((user) => user.id !== id);
            sessionStorage.setItem('users', JSON.stringify(filterUsers));

            break;
        }
      });

      const div = tr.querySelector('div');
      
      for (let key in user) {
        if (key === 'id') {
          continue;
        }
        
        const td = document.createElement('td');
        const value = user[key];

        td.textContent = value;
        tr.insertBefore(td, div);
      }
    }
  }
