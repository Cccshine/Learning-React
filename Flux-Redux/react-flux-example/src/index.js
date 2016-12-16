import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

// class App extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {};
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<TodoHeader/>
// 				<TodoList/>
// 			</div>
// 		);
// 	}
// }

// 单纯 render UI 建议使用 Functional Component 写法，效能较佳且较简洁
function App(props){
	return <div><TodoHeader/><TodoList/></div>;
}

ReactDOM.render(<App/>,document.getElementById('App'));