import logo from "./logo.svg";
import "./App.scss";
import React from "react";
// import MyComponent from "./Example/MyComponent";
// import ListTodo from "./TodoApp/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Nav />
					<img src={logo} className="App-logo" alt="logo" />
					{/* <ListTodo /> */}
					{/* <MyComponent /> */}
					<Home />
				</header>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				{/* Same as */}
				<ToastContainer />
			</div>
		);
	}
}

export default App;
