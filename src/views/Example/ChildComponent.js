import React from "react";

class ChildComponent extends React.Component {
	state = {
		buttonToggle: false,
	};
	buttonToggle() {
		this.setState({ buttonToggle: !this.state.buttonToggle });
	}
	render() {
		console.log("check props:", this.props);
		console.log(this.state.buttonToggle);
		let { arrayFood } = this.props;
		return (
			<>
				<ul
					className="listFood"
					style={
						this.state.buttonToggle
							? { display: "block" }
							: { display: "none" }
					}
				>
					{arrayFood.map((value) => (
						<li key={value.id}>
							{value.nameFood} - {value.price} <span>$</span>
						</li>
					))}
				</ul>
				<button onClick={() => this.buttonToggle()}>
					{this.state.buttonToggle ? "Hide" : "Show"}
				</button>
			</>
		);
	}
}

export default ChildComponent;
