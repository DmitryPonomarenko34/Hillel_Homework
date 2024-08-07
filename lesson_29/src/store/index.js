import { createStore, combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.payload);
      
      return [...state, action.payload];
    default:
      return state;
  }
};

const allReducers = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

export const store = createStore(allReducers);