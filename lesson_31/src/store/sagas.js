import { call, put, takeEvery } from "redux-saga/effects";
import { getTodoListAsync } from "../api";
import { add } from "./todoSlice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTodos() {
  try {
    const items = yield call(getTodoListAsync);
    yield put({ type: add.type, items });
  } catch (e) {
    yield put({ type: "TODOS_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("TODOS_FETCH_REQUESTED", fetchTodos);
}

export default mySaga;
