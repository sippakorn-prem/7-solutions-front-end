import { TodoListData } from 'src/common/constant';
import { AppState } from './state.interface';

export const initialState: AppState = {
	todoList: TodoListData,
	currentTodoList: [],
	selectedItem: null,
};
