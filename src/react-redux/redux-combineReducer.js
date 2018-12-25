import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      title: 'learning redux',
      completed: false
    },
    {
      id: 1,
      title: 'learning redux-immutability',
      completed: false
    }
  ],
  visibility: 'HIDE_ALL'
};

const todoReducer = (state = INITIAL_STATE.todos, action) => {
  console.log('action = ', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title,
        completed: false
      };
    case 'TOGGLE_TODO': {
      console.log('toggling');
      return state.map(todoItem => {
        if (todoItem.id !== action.id) {
          return todoItem;
        }
        return {
          ...todoItem,
          id: action.id,
          completed: action.completed
        };
      });
    }
    default:
      return state;
  }
};

const visibilityReducer = (state = INITIAL_STATE.visibility, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return 'SHOW_ALL';
    case 'UNSET_VISIBILITY':
      return 'HIDE_ALL';
    case 'TOGGLE_VISIBILITY':
      if (state === 'SHOW_ALL') {
        return 'HIDE_ALL';
      }
      return 'SHOW_ALL';
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ todos: todoReducer, visibility: visibilityReducer })
);

const todoAfter = {
  todos: [
    {
      id: 0,
      title: 'learning redux',
      completed: false
    },
    {
      id: 1,
      title: 'learning redux-immutability',
      completed: true
    }
  ],
  visibility: 'SHOW_ALL'
};

function toggleVisbiltyAndTodoAction() {
  const toggleTodoAction = {
    id: 1,
    completed: true,
    type: 'TOGGLE_TODO'
  };

  deepFreeze(toggleTodoAction);

  return toggleTodoAction;
}

console.log('------------- INITIAL STATE-------------------');
console.log(store.getState());
console.log('----------------------------------------------');

console.log('\n');
console.log('\n');

console.log('------------- DISPATCHING ACTION-------------------');
console.log(toggleVisbiltyAndTodoAction());
store.dispatch(toggleVisbiltyAndTodoAction());
console.log('---------------------------------------------------');

console.log('\n');
console.log('\n');

console.log('------------- STATE AFTER DISPATCH -------------------');
console.log(store.getState());
console.log('------------------------------------------------------');

console.log('\n');
console.log('\n');
