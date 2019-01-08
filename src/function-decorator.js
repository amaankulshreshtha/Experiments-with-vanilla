/* Decorator function: A function decorator is a higher-order function 
that takes one function as an argument and returns another function, 
and the returned function is a variation of the argument function.
Read more here: https://medium.freecodecamp.org/discover-the-power-of-first-class-functions-fd0d7b599b69
*/

function once(fn) {
  let returnValue;
  let canRun = true;
  console.log("function has run");
  return function runOnce() {
    try {
      if (canRun) {
        // console.log("%cValue of canRun inside if = ", "color:red", canRun);
        returnValue = fn.apply(this, arguments);
        canRun = false;
        return returnValue;
      } else {
        throw new Error("Function has already ran once");
      }
      // console.log("%cValue of canRun outside if = ", "color:orange", canRun);
      // console.log("%cValue of processOnce = ", "color:green", returnValue);
    } catch (e) {
      throw new Error(e);
    }
  };
}

function process() {
  return "process";
}

var processonce = once(process);
console.log(processonce()); // will return process
// Will Throw an error if you run the function again
// console.log(processonce());
var processTwoOnce = once(process);
processTwoOnce(); // This will not throw an error as it is a separate instance
