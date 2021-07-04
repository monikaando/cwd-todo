import { useState, useEffect } from 'react';
import './App.css';
import ToDo from './ToDo';

function getTodosFromLocalStorage() {
	let todosString = localStorage.getItem('todos');
	if (todosString && todosString.length > 0) {
		return todosString.split(',');
	} else {
		return [];
	}
}

function App() {
	const [todos, setTodos] = useState(getTodosFromLocalStorage);
	const [inputValue, setInputValue] = useState('');
	function addTodo(e) {
		if (inputValue && inputValue.trim() && inputValue.length > 0) {
			setTodos([...todos, inputValue]);
			//clean up the input value
			setInputValue('');
		}
	}
	function handleKeypress(e) {
		//it triggers by pressing the enter key
		if (e.keyCode === 13) {
			addTodo();
		}
	}
	function removeTodo(todo) {
		setTodos(todos.filter((td) => td !== todo));
	}

	useEffect(() => {
		localStorage.setItem('todos', todos);
	}, [todos]);
	return (
		<div id="app">
			<h1 className="todos-title">To-do List</h1>
			<div className="input-row">
				<input
					className="add-todo-input"
					value={inputValue}
					onKeyDown={handleKeypress}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
				></input>
				<button className="submit-button" onClick={addTodo}>
					Add Todo
				</button>
			</div>
			<div className="todo-container">
				{todos.map((item) => (
					<ToDo todo={item} removeTodo={removeTodo} />
				))}
			</div>
			<p className="counter">
				You have <strong>{todos.length}</strong> tasks in progress
			</p>
		</div>
	);
}

export default App;
