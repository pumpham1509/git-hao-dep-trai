import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {
	state = {
		valueAdd: "",
	};
	handleOnChangeValueAdd = (event) => {
		console.log(event);
		this.setState({
			valueAdd: event.target.value,
		});
	};
	handleAddTodo = (value) => {
		if (!value) {
			toast.error("Error!!!");
			return;
		}
		let todo = {
			id: Math.floor(Math.random() * 1000),
			title: value,
		};
		this.props.handleAddTodo(todo);
		this.setState({
			valueAdd: "",
		});
	};
	render() {
		let { valueAdd } = this.state;
		return (
			<div className="list-todo-add">
				<input
					type="text"
					value={valueAdd}
					placeholder="Vui lòng nhập công việc"
					className="list-todo-input"
					onChange={(event) => this.handleOnChangeValueAdd(event)}
				/>
				<button
					className="list-todo-btn list-todo-btn-add"
					onClick={() => this.handleAddTodo(valueAdd)}
				>
					Add
				</button>
			</div>
		);
	}
}

export default AddComponent;
