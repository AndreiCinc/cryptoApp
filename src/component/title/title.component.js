import React from 'react';
import Search from '../search/search.component';
import './title.style.css';

class Title extends React.Component {
	render() {
		return(
			<div>
			<h1>Crypto App</h1>
			<Search />
			</div>
		);
	}
}

export default Title; 