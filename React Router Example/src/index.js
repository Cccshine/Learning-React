import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About';
import User from './components/User';
import Contacts from './components/Contacts';

var name = {
	"a":'cc',
	"b":'cshine'
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('app'));


// Router 是放置 Route 的容器，其本身不定义 routing ，真正 routing 规则由 Route 定义。
// Router 中有一个属性 history 的规则，这边使用我们使用 hashHistory，使用 routing 将由 hash（#）变化决定

// Route 负责 URL 和对应的组件关系，可以有多个 Route 规则也可以有嵌套（nested）Routing。
// 像下面的例子就是每个页面都会先载入 App 组件再载入对应 URL 的组件。

// path 是对应 URL 的规则。例如：/repos/torvalds 会对应到 /repos/:name 的位置，并将参数传入 Repos 组件中。
// 由 this.props.params.name 取得参数。顺带一提，若为查询参数 /user?q=torvalds 则由 this.props.location.query.q 取得参数。

// IndexRoute 由于 / 情况下 App 组件对应的 this.props.children 会是 undefinded，
// 所以使用 IndexRoute 来解决对应问题。这样当 URL 为 / 时将会对应到 Home 组件。
// 不过要注意的是 IndexRoute 没有 path 属性。