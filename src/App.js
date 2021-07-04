import { useState } from 'react';
import './App.css';
import ToDo from './ToDo';

//initial value
const initialState = ['Buy some milk', 'Feed cats', 'Vacum floors', 'Take a shower'];

function App() {
	const [todos, setTodos] = useState(initialState);
	const [inputValue, setInputValue] = useState('');
	function removeTodo(todo) {
		setTodos(todos.filter((td) => td !== todo));
	}
	return (
		<div className="todoapp">
			<h1>To-do List</h1>
			<div>
				<input
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
				></input>
				<button
					onClick={(e) => {
						//add to do
						if (inputValue && inputValue.trim()) {
							setTodos([...todos, inputValue]);
							//clean up the input value
							setInputValue('');
						}
					}}
				>
					Add Todo
				</button>
			</div>
			{todos.map((item) => (
				<ToDo todo={item} removeTodo={removeTodo} />
			))}
		</div>
	);
}

export default App;
