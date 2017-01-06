import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from '../../containers/TodoListContainer'

const TodoList = ({
	todos,
	onDeleteTodo,
})=>(
	<div>
		<ul>
		{
			todos.map((todo,index)=>(
				<li key={index}>
					{todo.get('text')}
					<button onClick={onDeleteTodo(index)}>X</button>
				</li>
			)).toJS()
		}
		</ul>
	</div>
);

export default TodoList;