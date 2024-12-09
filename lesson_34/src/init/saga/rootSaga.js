import { all, call } from 'redux-saga/effects';
import { todosWatcher } from './watcher';

export default function* rootSaga() {
  yield all([call(todosWatcher)]);
  // code after all-effect
}
