export async function getTodoListAsync(setTodos) {
  try {
    const response = await fetch('http://localhost:5000/todos');

    if (response.status === 404) {
      throw new Error('Todos not found');
    }
    
    const data = await response.json();
    
    setTodos({todoItems: data});
  } catch(err) {
      console.log(err);
  }
}

export async function createTodoAsync(value, setTodos) {
  try {
   const response = await fetch('http://localhost:5000/todos', { 
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({text: value})
    });

    const data = await response.json();
    setTodos(prevState => ({todoItems: [...prevState.todoItems, data]}));

  } catch(err) {
      console.log(err);
  }
}

export async function updateTodoAsync(id, body, setTodos) {
  try {
   const response = await fetch(`http://localhost:5000/todos/${id}`, { 
      method: "PUT",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    setTodos(prevState => ({todoItems: prevState.todoItems.map(item => {
      if (item._id === data._id) {
        return data;
      }

      return item;
    })}));

  } catch(err) {
      console.log(err);
  }
}

export async function removeTodoAsync(id, setTodos) {
  try {
   const response = await fetch(`http://localhost:5000/todos/${id}`, { 
      method: "DELETE",  
    });

    const data = await response.json();
    setTodos(prevState => ({todoItems: prevState.todoItems.filter(item => item._id !== data._id)}));

  } catch(err) {
      console.log(err);
  }
}