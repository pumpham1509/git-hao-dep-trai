import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
	state = {
		arrayFood: [
			{
				id: "111",
				nameFood: "Hambuger",
				price: 100,
			},
			{
				id: "112",
				nameFood: "Mì ý",
				price: 50,
			},
			{
				id: "113",
				nameFood: "Mì bò",
				price: 20,
			},
		],
	};
	addData = (data) => {
		console.log(data);
		this.setState({
			arrayFood: [...this.state.arrayFood, data],
		});
	};
	deleteElement = (a) => {
		console.log(a);
		let food = this.state.arrayFood;
		food = food.filter((value) => value.id !== a);
		this.setState({ arrayFood: food });
	};
	render() {
		console.log("re-render");
		return (
			<>
				<AddComponent addData={this.addData} />
				<ChildComponent
					arrayFood={this.state.arrayFood}
					deleteElement={this.deleteElement}
				/>
			</>
		);
	}
}

export default MyComponent;
