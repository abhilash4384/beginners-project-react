import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FlexCard, Text } from '../todo-app.style';
import TodoItem from './todo-item';

const TodoList = ({ todoList, onTodoUpdated, onDeleteTodo }) => {
	const { completedTodos, inCompleteTodos } = useMemo(() => {
		const completedTodos = [];
		const inCompleteTodos = [];
		todoList.forEach((item) => {
			if (item.isCompleted) {
				completedTodos.push(item);
			} else {
				inCompleteTodos.push(item);
			}
		});
		return { completedTodos, inCompleteTodos };
	}, [todoList]);

	return (
		<div>
			{inCompleteTodos.length > 0 && (
				<FlexCard>
					<Text fontWeight="bold">Incomplete Todos</Text>
				</FlexCard>
			)}
			{inCompleteTodos.map((todoItem) => {
				if (!todoItem.isCompleted) {
					return (
						<TodoItem
							key={todoItem.id}
							todoItem={todoItem}
							onTodoUpdated={onTodoUpdated}
							onDeleteTodo={onDeleteTodo}
						/>
					);
				}
			})}
			{completedTodos.length > 0 && (
				<FlexCard>
					<Text fontWeight="bold">Completed Todos</Text>
				</FlexCard>
			)}

			{completedTodos.map((todoItem) => {
				if (todoItem.isCompleted) {
					return (
						<TodoItem
							key={todoItem.id}
							todoItem={todoItem}
							onTodoUpdated={onTodoUpdated}
							onDeleteTodo={onDeleteTodo}
						/>
					);
				}
			})}
		</div>
	);
};

TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
	onTodoUpdated: PropTypes.func.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
