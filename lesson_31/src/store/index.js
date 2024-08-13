import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./todoSlice";
import mySaga from "./sagas";
import { useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const useTodo = () => {
  const todo = useSelector((state) => state.todo);
  return {
    todo,
  };
};

export const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
