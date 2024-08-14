import { takeEvery } from "redux-saga/effects";
import { fetchAddTodoWorker, fetchTodosWorker } from "./workers";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_ADD_TODO_REQUEST = "FETCH_ADD_TODO_REQUEST";

export function* todoWatcher() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield takeEvery(FETCH_ADD_TODO_REQUEST, fetchAddTodoWorker);
}
