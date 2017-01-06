import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
  //第一个参数：放入我们的 reducer 或是有多个 reducers combine（使用 combineReducers）在一起的 rootReducers
  rootReducer,
  //第二个参数：放入希望预先载入的 state 
  initialState,
  //第三个参数：放入我们想要使用用来增强 Redux 功能的 middlewares
  applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
);