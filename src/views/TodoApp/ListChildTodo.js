import React from "react";

class ListChildTodo extends React.Component {
	state = {
		editTodo: {},
	};
	handleEditTodo = (todo) => {
		let { editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		if (isEmptyObj === false && editTodo.id === todo.id) {
			this.props.handleUpdateTodo(editTodo);
			this.setState({
				editTodo: {},
			});
			return;
		}
		this.setState({
			editTodo: todo,
		});
	};
	handleClickDelete = (todo) => {
		this.props.handleClickDelete(todo);
	};
	handleOnchangeTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = event.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};
	render() {
		let { listTodos } = this.props;
		let { editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		console.log(editTodo, isEmptyObj);
		return (
			<div className="list-todo-content">
				{listTodos &&
					listTodos.length > 0 &&
					listTodos.map((value, index) => {
						return (
							<div className="list-todo-child" key={value.id}>
								{isEmptyObj === true ? (
									<span className="list-todo-item">
										{index + 1} - {value.title}
									</span>
								) : (
									<>
										{editTodo.id === value.id ? (
											<span>
												{index + 1} -
												<input
													type="text"
													value={editTodo.title}
													onChange={(event) =>
														this.handleOnchangeTodo(
															event
														)
													}
												/>
											</span>
										) : (
											<span className="list-todo-item">
												{index + 1} - {value.title}
											</span>
										)}
									</>
								)}
								<button
									className="list-todo-btn list-todo-btn-edit"
									onClick={() => this.handleEditTodo(value)}
								>
									{isEmptyObj === false &&
									editTodo.id === value.id
										? "Save"
										: "Edit"}
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
				{Object.keys(listTodos).length === 0 && (
					<div>Không có công việc nào!!!</div>
				)}
			</div>
		);
	}
}
export default ListChildTodo;
