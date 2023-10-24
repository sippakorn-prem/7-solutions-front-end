import { initialState } from './state.constant';
import { ReducerActionType } from './state.enum';
import { addItem, removeItem } from './state.helper';
import { AppState, ReducerActionParams } from './state.interface';

export function reducer(prevState: AppState, action: ReducerActionParams): AppState {
	const { type, value, key } = action;
	if (!prevState) prevState = initialState;

	switch (type) {
		case ReducerActionType.AddItem:
			return addItem(prevState, action);
		case ReducerActionType.RemoveItem:
			return removeItem(prevState, action);
		case ReducerActionType.SetState:
			return { ...prevState, [key]: value };
		default:
			return prevState;
	}
}
