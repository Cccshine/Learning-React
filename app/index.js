import React from 'react';
import ReactDOM from 'react-dom';

/* ------------------------------------------------------------------------------------入门简介例子
const divStyle = {
  color: 'red',
  background: 'yellow'
};

var props = {
  style: "width:20px",
  className: "main",
  value: "yo",  
}

// ES6 class语法
class MyComponent extends React.Component{
	// render 是 Class based 组件唯一必须的方法（method）
	render(){
		return (
			<h1 data-age="21">Hello {this.props.name}</h1>
		);
	}
}


ReactDOM.render(<MyComponent {...props} name="Cshine" data-age="21"/>,document.getElementById('app'));

//js语法
function Welcome (props) {
	return <h2 style={divStyle}>Hello, {props.name}</h2>;
}

ReactDOM.render(<Welcome name="React"/>,document.getElementById('app'));
------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------------------props介绍
// ES6 语法
class HelloMessage extends React.Component{
	// 若是需要绑定 this.方法或是需要在 constructor 使用 props，定义 state，就需要 constructor。
	// 若是在其他方法（如 render）使用 this.props 则不用一定要定义 constructor
	constructor(props){
		// 对于 OOP 物件导向程式设计熟悉的读者应该对于 constructor 建构子的使用不陌生，
		// 事实上它是 ES6 的语法糖，骨子里还是 portotype based 物件导向程式语言。
		// 透过 extends 可以继承 React.Component 父类别。super 方法可以呼叫继承父类别的建构子
		super(props);
		this.state = {}
	}
	// render 是唯一必须的方法
	// 但如果是单纯 render UI 建议使用 Functional Component 写法，效能较佳且较简洁
	render(){
		return <div>Hello {this.props.name}</div>
	}
}

// PropTypes 验证，若传入的 props type 不是 string 将会显示错误(Warning)
HelloMessage.propTypes = {
	name:React.PropTypes.string,
}
// Prop 预设值，若对应 props 没传入值将会使用 default 值 Cshine
HelloMessage.defaultProps = {
	name:'Cshine',
}

// // ReactDOM.render(<HelloMessage />,document.getElementById('app'));
// ReactDOM.render(<HelloMessage name="CC"/>,document.getElementById('app'));

//js 语法
function HelloMessage(props){
	return <div>Hello {props.name}</div>;
}

HelloMessage.propTypes = {
	name:React.PropTypes.string,
}
HelloMessage.defaultProps = {
	name:'Cshine',
}
ReactDOM.render(<HelloMessage/>,document.getElementById('app'));
// ReactDOM.render(<HelloMessage name="CC"/>,document.getElementById('app'));
------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------
// state用法，在 React Component 可以自己管理自己的内部 state，并用 this.state 来存取 state。
// 当 setState() 方法更新了 state 后将重新呼叫 render() 方法，重新绘制 component 内容。
// 这里需要定义state,所以不用Functional Component 写法
class Timer extends React.Component {
    constructor(props) {
        super(props);
        // 与 ES5 React.createClass({}) 不同的是 component 内自定义的方法需要自行绑定 this context，
        // 或是使用 arrow function 
        this.tick = this.tick.bind(this);
        // 初始 state，等于 ES5 中的 getInitialState
        this.state = {
            secondsElapsed: 0,
        }
    }
    // 累加器方法，每一秒被呼叫后就会使用 setState() 更新内部 state，让 Component 重新 render
    tick() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }
    // componentDidMount 为 component 生命周期中阶段 component 已插入节点的阶段，
    // 通常一些非同步操作都会放置在这个阶段。这便是每1秒钟会去呼叫 tick 方法
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    // componentWillUnmount 为 component 生命周期中 component 即将移出插入的节点的阶段。
    // 这边清除了 setInterval定时器 
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    // render 为 class Component 中唯一需要定义的方法，其回传 component 欲显示的内容
    render() {
        return (
          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );      
    }
}

ReactDOM.render(<Timer />, document.getElementById('app'));
----------------------------------------------------------------------------------------------*/

// 事件处理
