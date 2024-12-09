import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext();

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer
  }),
  middleware: () => [sagaMiddleware, routerMiddleware]
});

export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
