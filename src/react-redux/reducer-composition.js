import deepFreeze from 'deep-freeze';
import { todoReducer, visibilityReducer } from './reducer';

const compositeReducer = (
  state = {
    todos: [],
    visibility: 'HIDE_ALL'
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.push(todoReducer(state.todos, action))
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todoItem => todoReducer(state, action))
      };
    case 'SET_VISIBILITY':
      return {
        ...state,
        visibility: visibilityReducer(state.visibility, action)
      };
    case 'UNSET_VISIBILITY':
      return {
        ...state,
        visibility: visibilityReducer(state.visibility, action)
      };
    case 'TOGGLE_EVERYTHING':
      return {
        ...state,
        todos: state.todos.map(todoItem =>
          todoReducer(todoItem, {
            type: 'TOGGLE_TODO',
            id: action.id,
            completed: action.completed
          })
        ),
        visibility: visibilityReducer(state.visibility, {
          type: 'TOGGLE_VISIBILITY'
        })
      };
    default:
      return state;
  }
};

const addVisibiltyTester = () => {
  const todoBefore = {
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
    ]
  };

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
        completed: false
      }
    ],
    visibility: 'SHOW_ALL'
  };

  const changeTodoAction = {
    type: 'SET_VISIBILITY'
  };

  deepFreeze(todoBefore);
  deepFreeze(changeTodoAction);

  expect(compositeReducer(todoBefore, changeTodoAction)).toEqual(todoAfter);
};

const toggleVisbiltyAndTodoTester = () => {
  const todoBefore = {
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

  const toggleEverythingAction = {
    id: 1,
    completed: true,
    type: 'TOGGLE_EVERYTHING'
  };

  deepFreeze(todoBefore);
  deepFreeze(toggleEverythingAction);

  expect(compositeReducer(todoBefore, toggleEverythingAction)).toEqual(
    todoAfter
  );
};

addVisibiltyTester();
toggleVisbiltyAndTodoTester();

console.log('tests passed !');
