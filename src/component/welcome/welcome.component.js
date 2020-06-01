import React from 'react';
import Search from './search.component';
import './welcome.style.css';

class Welcome extends React.Component {
	render() {
		return (
			<div className="body"> 
				<div className="welcome">
					<h2>Welcome to CryptoApp</h2>
					<Search />
				</div>
			</div>
		)
	}
}

export default Welcome;