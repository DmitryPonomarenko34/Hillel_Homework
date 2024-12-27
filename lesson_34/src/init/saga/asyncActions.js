import { createAction } from '@reduxjs/toolkit';

export const getTodosAsync = createAction('todos/getTodosAsync');
export const addTodosAsync = createAction('todos/addTodosAsync');
