import { useCallback, useRef, useState } from 'react';
import TodoList from './components/todo-list';
import {
	Container,
	FlexCard,
	StyledButton,
	StyledInput,
	Title,
} from './todo-app.style';
const TodoApp = () => {
	const inputRef = useRef();
	const [todoList, setTodoList] = useState([]);
	const addTodoHandler = useCallback(() => {
		const value = inputRef.current?.value;
		if (!value) return;
		setTodoList((todos) => [
			...todos,
			{
				id: new Date().getTime(),
				description: value,
				isCompleted: false,
				isEditing: false,
			},
		]);
		inputRef.current.value = '';
	}, []);

	const onTodoUpdated = useCallback(
		(todoItem) => {
			const newTodo = todoList.map((item) => {
				if (todoItem.id === item.id) {
					return { ...todoItem };
				}
				return item;
			});
			setTodoList(newTodo);
		},
		[todoList]
	);

	const onDeleteTodo = (deleteTodoId) => {
		const updatedTodoList = todoList.filter((item) => item.id !== deleteTodoId);
		setTodoList(updatedTodoList);
	};
	return (
		// <StyleSheetManager shouldForwardProp={isPropValid}>
		<Container>
			<FlexCard>
				<Title>TODO App</Title>
			</FlexCard>

			<FlexCard>
				<StyledInput placeholder="Add Todo" ref={inputRef} />
				<StyledButton onClick={addTodoHandler}>ADD TODO</StyledButton>
			</FlexCard>

			<TodoList
				todoList={todoList}
				onTodoUpdated={onTodoUpdated}
				onDeleteTodo={onDeleteTodo}
			/>
		</Container>
		// </StyleSheetManager>
	);
};

export default TodoApp;
