import api from '../../api';
import { put, call } from 'redux-saga/effects';
import {
  setDestinations,
  setLoading,
  setError,
  setHotels,
  setHotelsLoading
} from '../slices/bookingSlice';
import { push } from 'redux-first-history';

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

function* callSubmitFormAndGetHotelsWorker(action) {
  try {
    setHotelsLoading(true);
    const response = yield call(api.get, '/hotels');
    yield put(setHotels(response.data));
    yield put(push('/hotels'));
  } catch (error) {
    yield put(setError(error.response?.data?.message || 'Failed to fetch destinations'));
  } finally {
    yield put(setHotelsLoading(false));
  }
}

export { callGetDestinitionWorker, callSubmitFormAndGetHotelsWorker };
