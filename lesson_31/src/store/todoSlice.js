import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS_REQUEST } from "./saga/watchers";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return (state.items = action.payload);
    },
  },
});

export const useTodo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const fetchTodos = () => {
    dispatch({ type: FETCH_TODOS_REQUEST });
  };

  return {
    todo,
    fetchTodos,
  };
};

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
