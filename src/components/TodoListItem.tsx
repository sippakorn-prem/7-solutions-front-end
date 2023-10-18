import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { AppState, ReducerActionParams } from 'src/state';
import { ReducerActionType } from 'src/state/state.enum';
import './TodoListItem.scss';

type Props = AppState &
	typeof mapDispatchToProps & {
		data: TodoListItemMeta;
		clickable?: boolean;
	};

export interface TodoListItemMeta {
	type: string;
	name: string;
}

function TodoListItem({ data, clickable, setState }: Props): React.JSX.Element {
	const addTodoList = useCallback((): void => {
		if (clickable) setState('selectedItem', data);
	}, [data]);

	return (
		<div
			className="TodoListItem"
			id={data.name}
			onClick={addTodoList}
			style={{ cursor: clickable ? 'pointer' : 'initial' }}
		>
			{data.name}
		</div>
	);
}

const mapStateToProps = (state: AppState): AppState => state;

const mapDispatchToProps = {
	setState: (
		key: keyof AppState,
		value: TodoListItemMeta,
	): ReducerActionParams<TodoListItemMeta> => ({
		type: ReducerActionType.SetState,
		key,
		value,
	}),
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
