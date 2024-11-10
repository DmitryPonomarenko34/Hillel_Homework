import { useState } from "react";
import {
  TextField,
  IconButton,
  Box,
  Button,
  Checkbox,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((item) =>
    item.todoName
      .toLocaleLowerCase()
      .trim()
      .includes(search.toLocaleLowerCase().trim())
  );

  const addTodo = () => {
    setTodos((prevState) => [...prevState, { checked: false, todoName }]);
    setTodoName("");
  };

  const removeTodo = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.checked));
  };

  const toggleCheck = (index) => {
    setTodos((prevState) =>
      prevState.map((item, itemIndex) => ({
        ...item,
        checked: itemIndex === index ? !item.checked : item.checked,
      }))
    );
  };

  const searchTodo = (event) => {
    setSearch(event.target.value);
  };

  const changeTodoName = (event) => {
    setTodoName(event.target.value);
  };

  return (
    <>
      <TextField
        onChange={changeTodoName}
        label="Add todo"
        InputProps={{
          endAdornment: (
            <IconButton onClick={addTodo}>
              <AddIcon />
            </IconButton>
          ),
        }}
      />
      {filteredTodos?.map((todo, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            border: "1px solid #000",
          }}
        >
          <Checkbox
            checked={todo.checked}
            onChange={() => toggleCheck(index)}
          />
          <Typography>{todo.taskName}</Typography>
        </Box>
      ))}
      <Stack direction="row" gap="15px" alignItems="center">
        <Chip label="Count:" variant="outlined">
          {filteredTodos.length}
        </Chip>
        <Button
          onClick={removeTodo}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <TextField onChange={searchTodo} type="search" />
      </Stack>
    </>
  );
}
