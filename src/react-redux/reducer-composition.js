import deepFreeze from "deep-freeze";
import { todoReducer, visbilityReducer } from "./reducer";

const compositeReducer = (
  state = {
    todos: [],
    visibility: "HIDE_ALL"
  },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
    case "SET_VISIBILITY":
    case "UNSET_VISIBILITY":
    default:
      return state;
  }
};

const addVisibiltyTester = () => {
  const todoBefore = {
    todos: [
      {
        id: 0,
        title: "learning redux",
        completed: false
      },
      {
        id: 1,
        title: "learning redux-immutability",
        completed: false
      }
    ]
  };

  const todoAfter = {
    todos: [
      {
        id: 0,
        title: "learning redux",
        completed: false
      },
      {
        id: 1,
        title: "learning redux-immutability",
        completed: false
      }
    ],
    visibility: "SHOW_ALL"
  };

  const changeTodoAction = {
    type: "SET_VISIBILITY",
    id: 0
  };

  deepFreeze(todoBefore);
  deepFreeze(changeTodoAction);

  expect(compositeReducer(todoBefore, changeTodoAction)).toEqual(todoAfter);
};

addVisibiltyTester();
