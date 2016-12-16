// 继承了 Facebook 提供的 Dispatcher API（主要是继承了 dispatch、register 和 subscribe 的方法），
// 打造自己的 DispatcherClass，当使用者触发 handleAction() 会 dispatch 出事件
import {Dispatcher} from 'flux';

class DispatcherClass extends Dispatcher{
	// 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。
	// 也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
	// constructor(...args) {
  	// 	  super(...args);
  	// }
  	handleAction(action){
  		this.dispatch({
  			type:action.type,
  			payload:action.payload,
  		});
  	}
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;