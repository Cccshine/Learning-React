// 我们把 View 和 Views Controller 整合在一起。在 TodoHeader 中，
// 我们主要任务是让使用者可以透过 input 新增代办事项。
// 使用者输入文字在 input 时会触发 onChange 事件，进而更新内部的 state，
// 当使用者按了送出钮就会触发 onAdd 事件，dispatch 出 addTodo event


import React,{Component} from 'react';
import {TodoActions} from '../actions/todoActions';
import TodoStore from '../stores/TodoStore';

class TodoHeader extends Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.state = {
			text:'',
			editing:false,
		};
	}
	onChange(event){
		this.setState({
			text:event.target.value,
		});
	}
	onAdd(){
		TodoActions.addTodo(this.state.text);
		this.setState({
			text:'',
		});
	}
	onDelete(){
		TodoActions.deleteTodo(TodoStore.getIndex());
	}


	render(){
		return (
			<div>
				<h1>TodoFlux</h1>
				<div>
					<input value={this.state.text} type="text" placeholder="请输入待办事项" onChange={this.onChange}/>
					<button onClick={this.onAdd}>添加</button>
					<button onClick={this.onDelete}>删除</button>
				</div>
			</div>
		);
	}
}

export default TodoHeader;