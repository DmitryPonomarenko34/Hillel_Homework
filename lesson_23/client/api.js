import { renderTodoList, addTodo } from "./utils.js";

export async function getTodoList() {
  try {
    const response = await fetch('http://localhost:5000/todos');

    if (response.status === 404) {
      throw new Error('Todos not found');
    }
    
    const data = await response.json();
    renderTodoList(data);
  } catch(err) {
      console.log(err);
  }
};

export async function createTodo({ value }) {
  try {
   const response = await fetch('http://localhost:5000/todos', { 
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({text: value})
    });

    const data = await response.json();
    addTodo(data);
  } catch(err) {
      console.log(err);
  }
};