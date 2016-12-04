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
//组件中的props是一种父级向子级传递数据的方式.
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

/*-----------------------------------------------------------------------------------------------事件处理
// TodoApp元件中包含了显示Todo的TodoList元件，Todo的内容透过props传入TodoList中。
// 由于TodoList仅单纯Render UI不涉及内部state操作是stateless component，所以使用Functional Component写法。
// 需要特别注意的是这边我们用map function来迭代Todos，
// 需要留意的是每个迭代的元素必须要有unique key不然会发生错误（可以用自定义id，或是使用map function的第二个参数index）
const  TodoList  = ( props ) => (
     < ul >
        {
            props . items . map (( item ) => (
                 < li key = { item . id } > { item . text } < / li >
            ))
        }
    < / ul >
);

//整个App的主要元件，这边比较重要的是事件处理的部份
class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items:[],
            text:'',
        }
    }

    onChange(e){
        this.setState({text:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        alert('yes')
        const nextItems = this.state.items.concat([{text:this.state.text,id:Date.now()}]);
        const nextText = '';
        this.setState({items:nextItems,text:nextText});
    }
    render(){
        return(
            <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items}/>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.text}/>
                <button>{'Add #'+(this.state.items.length+1)}</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render( <TodoApp /> , document.getElementById ( 'app' ));
-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------

// Refs 与表单处理
// 需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性
// this.refs.[refName] 就会返回这个真实的 DOM 节点
class MarkdownEditor extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup = this.rawMarkup.bind(this);
        this.state = {
            value:'Type some *markedown* here!',
        }
    }

    handleChange(){
        //this.refs.textarea获取真实DOM才能取得用户的输入，虚拟DOM是不行的
        this.setState({value:this.refs.textarea.value});
    }
    //将使用者输入的Markdown语法parse成HTML放入DOM中，React通常使用virtual DOM作为和DOM沟通的中介，
    //不建议直接操作DOM。故使用时的属性为dangerouslySetInnerHTML 
    rawMarkup(){
        const md = new Remarkable();
        return {__html:md.render(this.state.value)};
    }

    render(){
        return(
            <div className="MarkdownEditor">
            <h3>Input</h3>
            <textarea
                onChange={this.handleChange}
                ref="textarea"
                defaultValue={this.state.value}/>
            <h3>Output</h3>
            <div
                className="content"
                dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>

        );
    }
}

ReactDOM.render(<MarkdownEditor/>,document.getElementById('app'));
-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------
//Component 生命周期展示
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name:'Cshine',
        }
    }
    handleClick(){
        this.setState({name:'CC'});
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReciveProps(){
        console.log('componentWillReciveProps');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        return(
            <div onClick={this.handleClick}>Hi,{this.state.name}</div>
        );
    }
}

ReactDOM.render(<MyComponent/>,document.getElementById('app'));
----------------------------------------------------------------------------------------------*/

//Ajax 非同步处理
//组件的数据来源，通常是通过 Ajax 请求从服务器获取，
//可以使用 componentDidMount 方法设置 Ajax 请求，等到请求成功，再用 this.setState 方法重新渲染 UI 
//若有需要进行Ajax非同步处理，请在componentDidMount进行处理。以下透过jQuery执行Ajax取得Github API
class UserGithub extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            githubUrl:'',
            avatarUrl:'',
        }
    }
    componentDidMount(){
        $.get(this.props.source,(result)=>{
            console.log(result);
            const data = result;
            if(data){
                this.setState({
                    username:data.name,
                    githubUrl:data.html_url,
                    avatarUrl:data.avatar_url
                });
            }
        });
    }
    render(){
        return(
            <div>
            <h3>{this.state.username}</h3>
            <img src={this.state.avatarUrl}/>
            <a href={this.state.githubUrl}>Github Link</a>
            </div>
        );
    }
}

ReactDOM.render(<UserGithub source="https://api.github.com/users/Cccshine"/>,document.getElementById('app'));
