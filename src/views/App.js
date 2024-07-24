import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import MyComponent from "./Example/MyComponent";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<MyComponent />
				</header>
			</div>
		);
	}
}

export default App;
