import logo from "./logo.svg";
import "./App.scss";
import React from "react";
// import MyComponent from "./Example/MyComponent";
import ListTodo from "./TodoApp/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<ListTodo />
					{/* <MyComponent /> */}
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
