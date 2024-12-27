import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory()
});

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer
  }),
  middleware: () => [sagaMiddleware, routerMiddleware]
});

sagaMiddleware.run(rootSaga);
export const history = createReduxHistory(store);
