import React from 'react'
import './App.css'

/* 
  This is an example of higher order components

  It is inspired by higher order functions: functions that take other functions as arguments or 
  their value is a function

  Ex: 

  const add = (a, b) => a + b;

  console.log(add(9, 8)) 
  // Output: 17

  // Now suppose we want to make an adder that utilises the add function

  const adder = (a) => (b) => add(a, b)
  
  // For ease of understanding, we can write the above like this as well
  const adder = function(a) {
    return function(b) {
      add(a, b);
    };
  }

  const add2 = adder(5);

  console.log(add2(8))
  // Output: 13
*/


// In this example, we are taking the Component as the input and sending it rendering it as Another Component
const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };

    // returning passed component as another component
    render() {
      return (
        <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
          <Component mouse={this.state} />
        </div>
      )
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.mouse.x}</p>
        <p>{this.props.mouse.y}</p>
      </div>
    )
  }
}

const AppWithMouse = withMouse(App);

export default AppWithMouse;