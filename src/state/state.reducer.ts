import { clone, remove, uniq } from 'lodash';
import { TodoListItemMeta } from 'src/components/TodoListItem';
import { initialState } from './state.constant';
import { ReducerActionType } from './state.enum';
import { AppState, ReducerActionParams } from './state.interface';

export function reducer<A = any>(prevState: AppState, action: ReducerActionParams<A>): AppState {
	const { type, value } = action;
	if (!prevState) prevState = initialState;

	switch (type) {
		case ReducerActionType.AddItem:
			const todoList = clone(prevState.todoList);
			remove(todoList, (item: TodoListItemMeta) => item.name === (value as TodoListItemMeta).name);

			return {
				...prevState,
				currentTodoList: [value as TodoListItemMeta, ...prevState.currentTodoList],
				todoList: todoList,
			};
		case ReducerActionType.RemoveItem:
			const currentTodoList = clone(prevState.currentTodoList);
			remove(
				currentTodoList,
				(item: TodoListItemMeta) => item.name === (value as TodoListItemMeta).name,
			);

			return {
				...prevState,
				currentTodoList: currentTodoList,
				todoList: uniq([...prevState.todoList, value as TodoListItemMeta]),
			};

		case ReducerActionType.SetState:
			return {
				...prevState,
				[action.key]: action.value,
			};
		default:
			return prevState;
	}
}
