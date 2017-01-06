import React from 'react';
import ReactDOM from 'react-dom';

//在TodoHeaderContainer中进行了connect，onChangeText，onCreateTodo,todo作为 props 绑定到组件上
//Functional Component 写法,props通过函数参数传入
const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>送出</button>
  </div>
);

export default TodoHeader;