import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import TodoFilterTable from './components/TodoFilterTable';
import TodoList from './components/TodoList';
import TodoListInput from './components/TodoListInput';
import store from './state';

function DataDisplay(): React.JSX.Element {
	return (
		<div id="DataDisplay">
			<h1 style={{ textAlign: 'center' }}>Select Item</h1>
			<TodoListInput />
			<TodoFilterTable />
		</div>
	);
}

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<div id="App">
				<TodoList />
				<DataDisplay />
			</div>
		</Provider>
	);
}

export default App;
