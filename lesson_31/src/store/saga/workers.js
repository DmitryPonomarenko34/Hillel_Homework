import { call, put } from "redux-saga/effects";
import { getTodoListAsync } from "../../api";
import { add } from "../todoSlice";

export function* fetchTodosWorker() {
  try {
    const data = yield call(getTodoListAsync);
    yield put({ type: add.type, payload: data });
  } catch (e) {
    yield put({ type: "TODOS_FETCH_FAILED", message: e.message });
  }
}
