// 在 componentDidMount 设了一个监听器 
// TodoStore 数据改变时会去把数据重新再更新，
// 这样当使用者新增代办事项时 TodoList 就会保持同步

import React,{Component} from 'react';
import TodoStore from '../stores/TodoStore';

function getAppState(){
	return {
		todos:TodoStore.getTodos(),
		index:TodoStore.getIndex(),
	};
}

class TodoList extends Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.state = {
			todos:[],
			index:0,
		};
	}

	componentDidMount(){
		TodoStore.addAddListener(this.onChange);
		TodoStore.addDeleteListener(this.onChange);
	}
	onChange(){
		this.setState(getAppState());
	}
	onClick(event){
		TodoStore.setIndex(event.target.dataset.index);
		var oList = document.getElementById('list');
		var items = oList.getElementsByTagName('li');
		for (let i=0;i<items.length;i++) {
			items[i].style.color = '#000';
			items[i].style.background = '#fff';
		}
		event.target.style.color = '#fff';
		event.target.style.background = '#fcc';
	}
	getIndex(){
		return this.state.index;
	}
	render(){
		return (
			<div>
				<ul id="list" onClick={this.onClick}>
					{
						this.state.todos.map((todo,key)=>(<li key={key} data-index={key}>{todo}</li>))
					}
				</ul>
			</div>
		);
	}
}

export default TodoList;