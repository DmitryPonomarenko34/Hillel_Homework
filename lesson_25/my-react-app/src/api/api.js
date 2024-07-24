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

// export async function createTodoAsync({ value }) {
//   try {
//    const response = await fetch('http://localhost:5000/todos', { 
//       method: "POST",  
//       headers: {
//         "Content-Type": "application/json",
//       }, 
//       body: JSON.stringify({text: value})
//     });

//     const data = await response.json();
//     addTodo(data);
//   } catch(err) {
//       console.log(err);
//   }
// }

// export async function updateTodoAsync(id, body) {
//   try {
//    const response = await fetch(`http://localhost:5000/todos/${id}`, { 
//       method: "PUT",  
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body)
//     });

//     const data = await response.json();
//     updateTodo(data);
//   } catch(err) {
//       console.log(err);
//   }
// }

// export async function removeTodoAsync(id) {
//   try {
//    const response = await fetch(`http://localhost:5000/todos/${id}`, { 
//       method: "DELETE",  
//     });

//     const data = await response.json();
//     removeTodo(data);

//   } catch(err) {
//       console.log(err);
//   }
// }