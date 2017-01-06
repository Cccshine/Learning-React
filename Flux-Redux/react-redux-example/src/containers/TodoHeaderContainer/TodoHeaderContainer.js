import {connect} from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import{
	changeText,
	createTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
	//getIn可能是Immutable里面的方法
	todo:state.getIn(['todo','todo']),
});

const mapDispatchToProps = (dispatch) =>({
	//当用户在input里输入内容时，View 发出 Action并附上使用者输入内容 event.target.value，
	//Store收到 Action 以后进行Reducer,得到新的state，更新View
	onChangeText:(event) => (
		dispatch(changeText({text:event.target.value}))
	),
	onCreateTodo:()=>{
		dispatch(createTodo());
		dispatch(changeText({text:''}));
	}
});
//对TodoHeader进行connect,这样store中的数据todo作为 props 绑定到TodoHeader上了
//changeText和createTodo两个action 作为 props 绑定到 组件TodoHeader上了
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoHeader);