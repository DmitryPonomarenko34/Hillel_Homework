import { takeEvery } from 'redux-saga/effects';
// Import
import { callGetDestinitionWorker, callAddBookingWorker } from './workers';
import { getDestinitionAsync, addBookingAsync } from './asyncActions';

export function* bookingWatcher() {
  yield takeEvery(getDestinitionAsync.type, callGetDestinitionWorker);
  yield takeEvery(addBookingAsync.type, callAddBookingWorker);
}
