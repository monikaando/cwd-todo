import React from 'react';

export default function ToDo({ todo, removeTodo }) {
	return (
		<div className="todo">
			<p>{todo}</p>
			<button
				className="remove"
				onClick={(e) => {
					removeTodo(todo);
				}}
			>
				X
			</button>
		</div>
	);
}
