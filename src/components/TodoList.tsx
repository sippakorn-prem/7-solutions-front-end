import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'src/state';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

type Props = AppState;

function TodoList({ todoList }: Props): React.JSX.Element {
	return (
		<div id="TodoList">
			<h1 style={{ textAlign: 'center' }}>List</h1>
			{todoList.map((item) => (
				<TodoListItem key={item.name} data={item} clickable />
			))}
		</div>
	);
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(TodoList);
