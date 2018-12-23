import deepFreeze from "deep-freeze";
import { todoReducer } from "./reducer";

const todoCompositeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todoReducer(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(item => todoReducer(item, action));
    default:
      return state;
  }
};

const addTodoTester = () => {
  const todoBefore = [
    {
      id: 0,
      title: "learning redux",
      completed: false
    }
  ];

  const addTodoAction = {
    type: "ADD_TODO",
    id: 1,
    title: "learning redux-immutability"
  };

  const todoAfter = [
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
  ];

  deepFreeze(todoBefore);
  deepFreeze(addTodoAction);

  expect(todoCompositeReducer(todoBefore, addTodoAction)).toEqual(todoAfter);
};

const toggleTodoTester = () => {
  const todoBefore = [
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
  ];

  const todoAfter = [
    {
      id: 0,
      title: "learning redux",
      completed: false
    },
    {
      id: 1,
      title: "learning redux-immutability",
      completed: true
    }
  ];

  const toggleTodoAction = {
    type: "TOGGLE_TODO",
    id: 1,
    completed: true
  };

  deepFreeze(todoBefore);
  deepFreeze(toggleTodoAction);

  expect(todoCompositeReducer(todoBefore, toggleTodoAction)).toEqual(todoAfter);
};

addTodoTester();
toggleTodoTester();

console.log("tests passed");
