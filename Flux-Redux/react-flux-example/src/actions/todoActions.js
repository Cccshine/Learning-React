// 利用 AppDispatcher 打造的 Action Creator 由 handleAction 负责发出传入的 action
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ADD_TODO,DELETE_TODO} from '../constants/actionTypes';

export const TodoActions = {
	addTodo(text){
		AppDispatcher.handleAction({
			type:ADD_TODO,
			payload:{
				text,
			},
		});
	},
	deleteTodo(index){
		AppDispatcher.handleAction({
			type:DELETE_TODO,
			payload:{
				index,
			},
		});
	},
};