import React from "react";
import "./ListTodo.scss";
import AddComponent from "./AddTodo";
import ListChildTodo from "./ListChildTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
	state = {
		listTodos: [
			{
				id: "1",
				title: "Todo 1",
			},
			{
				id: "2",
				title: "Todo 2",
			},
			{
				id: "3",
				title: "Todo 3",
			},
		],
	};
	handleAddTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo],
		});
		toast.success("Add Todo Success!");
	};
	handleClickDelete = (todo) => {
		let currentListTodos = this.state.listTodos.filter(
			(value) => value.id !== todo.id
		);
		this.setState({
			listTodos: currentListTodos,
		});
		toast.success("Delete Todo Success!");
	};
	render() {
		let { listTodos } = this.state;
		return (
			<>
				<div className="list-todo-container">
					<AddComponent handleAddTodo={this.handleAddTodo} />
					<ListChildTodo
						listTodos={listTodos}
						handleClickDelete={this.handleClickDelete}
					/>
				</div>
			</>
		);
	}
}
export default ListTodo;
