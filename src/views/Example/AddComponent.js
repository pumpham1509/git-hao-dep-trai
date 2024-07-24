import React from "react";

class AddComponent extends React.Component {
	state = {
		id: "",
		nameFood: "",
		price: "",
	};
	handleChangeNamefood(e) {
		this.setState({ nameFood: e.target.value });
	}
	handleChangePrice(e) {
		this.setState({ price: e.target.value });
	}
	handleClickButton(e) {
		e.preventDefault();
		if (this.state.nameFood && this.state.price) {
			this.props.addData({
				id: Math.floor(Math.random() * 10),
				nameFood: this.state.nameFood,
				price: this.state.price,
			});
			this.setState({
				id: "",
				nameFood: "",
				price: "",
			});
		}
		alert("Vui lòng nhập thông tin vào form!");
		console.log(this.state);
	}
	render() {
		return (
			<>
				<form>
					<label htmlFor="fnamefood">Name Food:</label>
					<br />
					<input
						value={this.state.nameFood}
						type="text"
						onChange={(e) => this.handleChangeNamefood(e)}
						placeholder="Name Food"
					/>
					<br />
					<label htmlFor="fprice">Price:</label>
					<br />
					<input
						value={this.state.price}
						type="text"
						onChange={(e) => this.handleChangePrice(e)}
						placeholder="Price"
					/>
					<br />
					<input
						type="submit"
						onClick={(e) => this.handleClickButton(e)}
						value="Gửi đi"
					/>
				</form>
			</>
		);
	}
}

export default AddComponent;
