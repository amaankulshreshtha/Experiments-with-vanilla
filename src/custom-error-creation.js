function CustomError(message) {
  this.message = message;
  this.stack = "";
}

CustomError.prototype = Error.prototype;

function testCustomError() {
  if (1 !== 2) {
    return new CustomError("The numbers are not equal");
  }
  return "No error!";
}

console.log(testCustomError());
console.log("%creturn color", "color: dodgerblue; background: black");
