// It is a function that acts like a reducer
// Parameter is an object
// Object keys correspond to state properties
// The values of those state properties are the corresponding default state from all the reducers
// Their values are the reducers that are to be combined

import { createStore } from "redux";

import { visibilityReducer, todoReducer } from "./reducer";

const combineReducers = reducers => {
  return (state = {}, action) => {
    Object.keys(reducers).reduce((nextState, key) => {
      // console.log('nextState = ', nextState, ' key = ', key);
      // console.log('state');
      // console.log('state[', key, '] = ', state[key]);
      // console.log(
      //   'reducer[',
      //   key,
      //   '] = ',
      //   reducers[key],
      //   ' value = ',
      //   reducers[key](state[key], action)
      // );
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const store = createStore(
  combineReducers({ visibility: visibilityReducer, todos: todoReducer })
);

console.log(store.getState());
