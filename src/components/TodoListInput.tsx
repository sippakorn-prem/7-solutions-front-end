import { map } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { AppState, ReducerActionParams, ReducerActionType } from 'src/state';
import './TodoListInput.scss';
import { TodoListItemMeta } from './TodoListItem';

type Props = AppState & typeof mapDispatchToProps;

function TodoListInput({
	selectedItem,
	currentTodoList,
	addItem,
	removeItem,
}: Props): React.JSX.Element {
	const selected = useMemo(() => selectedItem?.name ?? '', [selectedItem]);
	const isExists = map(currentTodoList, 'name')?.includes(selected);

	const addTodoList = useCallback((): void => {
		if (isExists) {
			removeItem(selectedItem);
		} else {
			addItem(selectedItem);

			setTimeout(() => {
				removeItem(selectedItem);
			}, 5000);
		}
	}, [currentTodoList, selectedItem]);

	return (
		<div id={TodoListInput.name}>
			<input
				className="TextInput"
				placeholder="Select item and press add button"
				value={selected}
				readOnly
			/>
			<button className="AddButton" onClick={addTodoList}>
				Add
			</button>
		</div>
	);
}

const mapStateToProps = (state: AppState): AppState => state;

const mapDispatchToProps = {
	addItem: (value: TodoListItemMeta): ReducerActionParams<TodoListItemMeta> => ({
		type: ReducerActionType.AddItem,
		value,
	}),
	removeItem: (value: TodoListItemMeta): ReducerActionParams<TodoListItemMeta> => ({
		type: ReducerActionType.RemoveItem,
		value,
	}),
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListInput);
