import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
	render() {
		return (
			<>
				<div class="topnav">
					<a class="active" href="#home">
						Home
					</a>
					<a href="#news">Todo</a>
					<a href="#about">About</a>
				</div>
			</>
		);
	}
}

export default Nav;
