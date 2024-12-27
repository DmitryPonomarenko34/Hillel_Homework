import { createAction } from '@reduxjs/toolkit';

// Створення асинхронних дій
export const getTodosAsync = createAction('todos/getTodosAsync');
export const addTodosAsync = createAction('todos/addTodosAsync');
