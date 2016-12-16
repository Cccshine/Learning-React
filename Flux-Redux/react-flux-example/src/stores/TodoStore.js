// Store 主要是负责数据业务逻辑处理，我们继承了 events 模组的 EventEmitter，
// 当 action 传入 AppDispatcher.register 的处理范围后，
// 根据 action type 选择适合处理的 store 进行处理，
// 处理完后透过 emit 方法发出事件让监听的 Views Controller 知道


//nodejs的events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装
import AppDispatcher from '../dispatcher/AppDispatcher';
import {ADD_TODO,DELETE_TODO} from '../constants/actionTypes';
import {EventEmitter} from 'events';

const store = {
	todos:[],
	index:0,
	editing:false,
}

class TodoStoreClass extends EventEmitter{
	addAddListener(callback){
		this.on(ADD_TODO,callback);
	}
	addDeleteListener(callback){
		this.on(DELETE_TODO,callback);
	}
	removeAddListener(callback){
		this.removeListener(ADD_TODO,callback);
	}
	removeDeleteListener(callback){
		this.removeListener(DELETE_TODO,callback);
	}
	getTodos(){
		return store.todos;
	}
	getIndex(){
		return store.index;
	}
	setIndex(index){
		store.index = index;
	}
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action)=>{
	switch(action.type){
		case ADD_TODO:
			store.todos.push(action.payload.text);
			TodoStore.emit(ADD_TODO);
			break;
		case DELETE_TODO:
			store.index = action.payload.index;
			store.todos.splice(store.index,1);
			TodoStore.emit(DELETE_TODO);
			break;
		default:
			return true;
	}
	return true;
});

export default TodoStore;