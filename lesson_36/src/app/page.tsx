import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import {Stack, TextField, Button, List, ListItem} from '@mui/material';

type Todo = {
  name: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoName, setTodoName] = useState('');

  const changeTodoName = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  }

  const createTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoName('');
    setTodos((prevState) => [...prevState, {name: todoName}])
  }

  return (
    <main className={styles.main}>
      <form onSubmit={createTodo}>
        <Stack direction={'row'} spacing={3}>
          <TextField value={todoName} onChange={changeTodoName} id="outlined-basic" label="Name" variant="outlined" />
          <Button variant="contained">Submit</Button>
        </Stack>
        <List>
          {todos.map((todo, index) => (
            <ListItem key={index}>
              {todo.name}
            </ListItem>
          ))}
        </List>
      </form>
    </main>
  );
}
