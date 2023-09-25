import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import {
	FlexCard,
	StyledButton,
	StyledCheckbox,
	StyledInput,
	Text,
} from '../todo-app.style';

const TodoItem = ({ todoItem, onTodoUpdated, onDeleteTodo }) => {
	const [isEditTodo, setIsEditTodo] = useState(false);
	const inputRef = useRef();
	const onCheckboxChangeHandler = () => {
		onTodoUpdated({
			...todoItem,
			isCompleted: !todoItem.isCompleted,
		});
	};

	const onUpdateTodoItem = () => {
		onTodoUpdated({
			...todoItem,
			description: inputRef.current.value,
		});
		setIsEditTodo(false);
	};
	if (isEditTodo) {
		return (
			<FlexCard
				justifyContent="space-between"
				border="2px solid #808080"
				margin="5px 30px"
				borderRadius="10px"
				padding="5px 5px"
			>
				<StyledInput
					placeholder="Add Todo"
					ref={inputRef}
					defaultValue={todoItem.description}
				/>
				<StyledButton onClick={onUpdateTodoItem} background="#1976d2">
					Save
				</StyledButton>
			</FlexCard>
		);
	}
	return (
		<FlexCard
			justifyContent="space-between"
			border="2px solid #808080"
			margin="5px 30px"
			borderRadius="10px"
			padding="0px 5px"
		>
			<FlexCard>
				<StyledCheckbox
					type="checkbox"
					name={`todo-checkbox-${todoItem.id}`}
					id={`todo-checkbox-${todoItem.id}`}
					onChange={onCheckboxChangeHandler}
					checked={todoItem.isCompleted}
				/>

				<Text textDecoration={todoItem.isCompleted ? 'line-through' : ''}>
					{todoItem.description}
				</Text>
			</FlexCard>

			<FlexCard>
				{!todoItem.isCompleted && (
					<StyledButton
						background="#1976d2"
						margin="none"
						onClick={() => setIsEditTodo(true)}
					>
						Edit
					</StyledButton>
				)}
				<StyledButton
					background="#d32f2f"
					margin="none"
					onClick={() => onDeleteTodo(todoItem.id)}
				>
					Delete
				</StyledButton>
			</FlexCard>
		</FlexCard>
	);
};

TodoItem.propTypes = {
	todoItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		isCompleted: PropTypes.bool.isRequired,
		isEditing: PropTypes.bool.isRequired,
	}),
	onTodoUpdated: PropTypes.func.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
