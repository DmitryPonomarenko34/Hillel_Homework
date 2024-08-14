import { takeEvery } from "redux-saga/effects";
import { fetchTodosWorker } from "./workers";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";

export function* todoWatcher() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosWorker);
}
