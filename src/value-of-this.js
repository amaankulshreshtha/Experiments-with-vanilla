function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
};

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
// Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  if (this.constructor === Child) {
    console.log("'this' refers to Child", this.constructor);
  }

  if (this.constructor === ParentWithStatic) {
    console.log("'this' refers to ParentWithStatic", this.constructor);
  }
  var position = this.position;
  var startPosition = this.constructor.getStartPosition(); // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  };
};

const child = new Child();

child.getOffsetByInitialPosition();
