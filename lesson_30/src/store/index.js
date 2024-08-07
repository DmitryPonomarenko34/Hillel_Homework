import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = { list: [] };

export const useTodos = () => useSelector(state => state.todos);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action) {
     return ({list: [...state.list, action.payload]})
    }
  },
});

export const { add } = todoSlice.actions;

export const store = configureStore({ 
  reducer: {
    todos: todoSlice.reducer
  }
});