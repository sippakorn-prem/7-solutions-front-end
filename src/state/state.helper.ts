import { clone, remove, uniq } from 'lodash';
import { TodoListItemMeta } from 'src/components/TodoListItem';
import { AppState, ReducerActionParams } from './state.interface';

export function addItem(prevState: AppState, action: ReducerActionParams): AppState {
	const todoList = clone(prevState.todoList);
	remove(
		todoList,
		(item: TodoListItemMeta) => item.name === (action.value as TodoListItemMeta).name,
	);

	return {
		...prevState,
		currentTodoList: [action.value as TodoListItemMeta, ...prevState.currentTodoList],
		todoList: todoList,
	};
}

export function removeItem(prevState: AppState, action: ReducerActionParams): AppState {
	const currentTodoList = clone(prevState.currentTodoList);
	remove(
		currentTodoList,
		(item: TodoListItemMeta) => item.name === (action.value as TodoListItemMeta).name,
	);

	return {
		...prevState,
		currentTodoList: currentTodoList,
		todoList: uniq([...prevState.todoList, action.value as TodoListItemMeta]),
	};
}
