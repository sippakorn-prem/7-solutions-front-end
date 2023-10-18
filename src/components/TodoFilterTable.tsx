import { map, uniq } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { TodoListData } from 'src/common/constant';
import { AppState } from 'src/state';
import './TodoFilterTable.scss';
import TodoListItem from './TodoListItem';

type Props = AppState;

function TodoFilterTable({ currentTodoList }: Props): React.JSX.Element {
	const filters = uniq(map(TodoListData, 'type'));

	return (
		<div id="TodoFilterTable">
			{filters.map((type) => (
				<div className="TodoFilterColumn" key={type}>
					<div className="TodoFilterHeader">{type}</div>
					<div className="TodoFilterBody">
						{currentTodoList.map(
							(item) => item.type === type && <TodoListItem key={item.name} data={item} />,
						)}
					</div>
				</div>
			))}
		</div>
	);
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(TodoFilterTable);
