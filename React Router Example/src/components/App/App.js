import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

// 我们将 App 组件当做每个组件都会载入的母模版，因此可以透过 children 载入对应 URL 的子组件
const App = (props) => (
	<div>
		<h1>React Router Tutorial</h1>
		<ul>
			<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
			<li><Link to="/about" activeStyle={{color:"green"}}>About</Link></li>
			<li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
			<li><Link to="/user" activeClassName="active">User</Link></li>
			<li><NavLink to="/contacts">Contacts</NavLink></li>
		</ul>
		{props.children}
	</div>
);

App.propTypes = {
  children: React.PropTypes.Object,
};

export default App;