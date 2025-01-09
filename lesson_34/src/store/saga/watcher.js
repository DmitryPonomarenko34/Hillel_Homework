import { takeEvery } from 'redux-saga/effects';
// Import
import { callGetDestinitionWorker, callSubmitFormAndGetHotelsWorker } from './workers';
import { getDestinitionAsync, submitFormAndGetHotelsAsync } from './asyncActions';

export function* bookingWatcher() {
  yield takeEvery(getDestinitionAsync.type, callGetDestinitionWorker);
  yield takeEvery(submitFormAndGetHotelsAsync.type, callSubmitFormAndGetHotelsWorker);
}
