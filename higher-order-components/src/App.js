import React from 'react'
import './App.css'

const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };

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