import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main';
import store from './store';

ReactDOM.render(
	//把所有内容包裹在 Provider 组件中，将之前创建的 store 作为 prop 传给 Provider
	//Provider 内的任何一个组件（比如这里的 Main），如果需要使用 state 中的数据，
	//就必须是「被 connect 过的」组件——使用 connect 方法对「你编写的组件（Main）」进行包装后的产物
	<Provider store={store}>
		<Main/>
	</Provider>,
	document.getElementById('app')
);