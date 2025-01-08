import api from '../../api';
import { put, call } from 'redux-saga/effects';
import { setDestinations, setLoading, setError } from '../slices/bookingSlice';

function* callGetDestinitionWorker() {
  try {
    yield put(setLoading(true));
    const response = yield call(api.get, '/destination');
    yield put(setDestinations(response.data));
  } catch (error) {
    yield put(setError(error.response?.data?.message || 'Failed to fetch destinations'));
  } finally {
    yield put(setLoading(false));
  }
}

function* callAddBookingWorker(action) {
  try {
  } catch (e) {
    console.warn(e);
  }
}

export { callGetDestinitionWorker, callAddBookingWorker };
