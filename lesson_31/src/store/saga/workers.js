import { call, put } from "redux-saga/effects";
import { getTodoListAsync, createTodoAsync } from "../../api";
import { getTodos, addTodo } from "../todoSlice";

export function* fetchTodosWorker() {
  try {
    const data = yield call(getTodoListAsync);
    yield put({ type: getTodos.type, payload: data });
  } catch (e) {
    yield put({ type: "TODOS_FETCH_FAILED", message: e.message });
  }
}

export function* fetchAddTodoWorker(action) {
  try {
    const data = yield call(createTodoAsync, action.payload);
    yield put({ type: addTodo.type, payload: data });
  } catch (e) {
    yield put({ type: "TODOS_FETCH_ADD_FAILED", message: e.message });
  }
}
