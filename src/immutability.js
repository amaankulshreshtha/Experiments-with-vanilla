import deepFreeze from "deep-freeze";

/* ################################################################
                  IMMUTABILITY WITH ARRAYS 
###################################################################*/

const addCounter = list => {
  // When we push something to the passed array, we are essentially, mutating it.
  // list.push(0); // Uncomment when we want to mutate the passed array.

  // If you want to return the array without mutating the passed argument

  // < ES6 - use the concat method
  // return list.concat([0]);

  // >= ES6 - use the spread operator
  return [...list, 0];
};

const removeCounter = (list, index) => {
  // When we splice something to the passed array, we are essentially, mutating it.
  // Uncomment when we want to mutate the passed array.
  // return list.splice(index, 1);

  // < ES6 - use the concat method
  // return list.slice(0, index).concat(list.slice(index + 1));

  // >= ES6 - use the spread operator
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  // < ES6

  // return list
  // .slice(0, index)
  // .concat([list[index] + 1])
  // .concat(list.slice(index + 1));

  // >= ES6

  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  // Make the array immutable
  deepFreeze(listBefore);

  // Testing to check if listBefore equals listAfter
  expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [10, 30, 20];
  const listAfter = [10, 20];

  deepFreeze(listBefore);

  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();

// console.log('Array Tests Passed');

/* ################################################################
                  IMMUTABILITY WITH OBJECTS
###################################################################*/

const toggleTodo = todo => {
  // Direct mutation of a property of an object.
  // todo.completed = !todo.completed;

  // >=ES6

  // Using Object.assign
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // });

  // Using Object spread operator
  return {
    ...todo,
    completed: !todo.completed
  };
};

const toggleTodoTester = () => {
  const todoBefore = {
    id: 0,
    title: "learning immutability",
    completed: false
  };

  const todoAfter = {
    id: 0,
    title: "learning immutability",
    completed: true
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

toggleTodoTester();

console.log("Object Tests Passed");
