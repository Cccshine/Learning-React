import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models';

import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
} from '../../constants/actionTypes';

//根据接收到的 action 进行 mapping 到对应的处理函式并传入夹带的 payload 数据
 const todoReducers = handleActions({
  CREATE_TODO: (state) => {
    let todos = state.get('todos').push(state.get('todo'));
    return state.set('todos', todos)
  },
  DELETE_TODO: (state, { payload }) => (
    state.set('todos', state.get('todos').splice(payload.index, 1))
  ),
  CHANGE_TEXT: (state, { payload }) => (
    state.merge({ 'todo': payload })
  )
}, TodoState);

export default todoReducers;
