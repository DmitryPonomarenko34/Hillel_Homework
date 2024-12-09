import { takeEvery } from 'redux-saga/effects';
// Import
import { callGetTodosWorker, callAddTodosWorker } from './workers';
import { getTodosAsync, addTodosAsync } from './asyncActions';

export function* todosWatcher() {
  yield takeEvery(getTodosAsync.type, callGetTodosWorker);
  yield takeEvery(addTodosAsync.type, callAddTodosWorker);
}
