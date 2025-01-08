import { all, call } from 'redux-saga/effects';
import { bookingWatcher } from './watcher';

export default function* rootSaga() {
  yield all([call(bookingWatcher)]);
  // code after all-effect
}
