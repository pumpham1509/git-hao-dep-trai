import React from "react";
import { ButtonLogin, ButtonLogout } from "./Button";
class Time extends React.Component {
	// # Props + State
	// eslint-disable-next-line no-useless-constructor
	// constructor(props) {
	// 	super(props);
	// 	this.state = { date: new Date() };
	// }

	// componentDidMount() {
	// 	this.idTimer = setInterval(() => this.tick(), 1000);
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.idTimer);
	// }

	// tick() {
	// 	this.setState({ date: new Date() });
	// }

	// render() {
	// 	return (
	// 		<div>
	// 			<h1>Hello, World</h1>
	// 			<h2>It is: {this.state.date.toLocaleTimeString()}</h2>
	// 		</div>
	// 	);
	// }

	// # Event
	// constructor(props) {
	// 	super(props);
	// 	this.state = { isToggleOn: true };
	// 	// this.clickMe = this.clickMe.bind(this);
	// }
	// // clickMe() {
	// // 	this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
	// // }
	// clickMe = () => {
	// 	console.log("xem this nay la gi", this);
	// };
	// render() {
	// 	return (
	// 		<div>
	// 			<button onClick={this.clickMe}>
	// 				{this.state.isToggleOn ? "On" : "Off"}
	// 			</button>
	// 		</div>
	// 	);
	// }

	// Conditional Rendering

	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isStatus: false };
	}
	handleLoginClick() {
		console.log("click");
		this.setState({ isStatus: true });
	}
	handleLogoutClick() {
		this.setState({ isStatus: false });
	}

	render() {
		const isStatus = this.state.isStatus;
		let button;
		if (isStatus) {
			button = <ButtonLogout onCLick={this.handleLogoutClick} />;
		} else {
			button = <ButtonLogin onCLick={this.handleLoginClick} />;
		}

		return <div>{button}</div>;
	}
}
export default Time;
