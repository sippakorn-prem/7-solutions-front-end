import { TodoListItemMeta } from 'src/components/TodoListItem';
import { ReducerActionType } from './state.enum';

export interface AppState {
	todoList: TodoListItemMeta[];
	currentTodoList: TodoListItemMeta[];
	selectedItem: TodoListItemMeta;
}

export interface ReducerActionParams<T = any> {
	type: ReducerActionType;
	key?: keyof AppState;
	value?: T;
}
