import React from "react";

class ListChildTodo extends React.Component {
	state = {
		toogleShowHide: true,
	};
	handleClickDelete = (todo) => {
		this.props.handleClickDelete(todo);
	};
	showAddInput = () => {
		this.setState({});
	};
	render() {
		let { listTodos } = this.props;
		let { toogleShowHide } = this.state;
		return (
			<div className="list-todo-content">
				{listTodos &&
					listTodos.length > 0 &&
					listTodos.map((value, index) => {
						return (
							<div className="list-todo-child" key={value.id}>
								<span className="list-todo-item">
									{index + 1} - {value.title}
								</span>
								<button className="list-todo-btn list-todo-btn-edit">
									Edit
								</button>
								<button
									className="list-todo-btn list-todo-btn-delete"
									onClick={() =>
										this.handleClickDelete(value)
									}
								>
									Delete
								</button>
							</div>
						);
					})}
			</div>
		);
	}
}
export default ListChildTodo;
