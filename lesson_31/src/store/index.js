import createSagaMiddleware from 'redux-saga'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { createStore, applyMiddleware  } from 'redux';

const rootReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case 'FETCH_BY_ENDPOINT_SUCCEEDED':
      return {data: action.payload};

      case 'RESET':
      return {data: null};
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function fetchByEndpoint(endpoint) {
  return async function fetchByEndpointThunk(dispatch) {
    try {
      const response = await fetch(`https://swapi.dev/api/${endpoint}`);
      const data = await response.json();
      
      dispatch(({type: 'GET', payload: data}))
    } catch(err) {
      
      console.log('something went wrong');
    }
  }
}

export function* fetchByEndpointSaga(action) {
  try {
    const data = yield call(fetchByEndpoint, action.payload.endpoint)
    yield put({ type: 'FETCH_BY_ENDPOINT_SUCCEEDED', data })
  } catch (e) {
    yield put({ type: 'FETCH_BY_ENDPOINT__FAILED', message: e.message })
  }
}

export function* watchfetchByEndpoin() {
  yield takeEvery('FETCH_BY_ENDPOINT', fetchByEndpointSaga)
}

sagaMiddleware.run(watchfetchByEndpoin)
