import React from 'react'
import './App.css'

class Mouse extends React.Component {
	state = { x: 0, y: 0 };

	handleMouseMove = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	render() {
		return (
			<div onMouseMove={this.handleMouseMove}>
				{this.props.children(this.state)}
			</div>
		);
	}
}

class App extends React.Component {

	render() {
		return (
			<Mouse>
				{mouse => (
					<>
						<p>{mouse.x}</p>
						<p>{mouse.y}</p>
					</>
				)}
			</Mouse>
		)
	}
}

export default App;