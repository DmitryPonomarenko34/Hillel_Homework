import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS_REQUEST, FETCH_ADD_TODO_REQUEST } from "./saga/watchers";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.items = [...action.payload];
    },

    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const useTodo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const fetchTodos = () => {
    dispatch({ type: FETCH_TODOS_REQUEST });
  };

  const fetchAddTodo = (todoName) => {
    dispatch({ type: FETCH_ADD_TODO_REQUEST, payload: todoName });
  };

  return {
    todo,
    fetchTodos,
    fetchAddTodo,
  };
};

export const { getTodos, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
