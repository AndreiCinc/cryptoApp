import React from 'react';
import './app.style.css';
import Title from './component/title/title.component';
import Card from './component/card/card.component';
import Data from './data/getData.component';

class App extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			data : ''
		}
		this.setData = this.setData.bind(this);
	}
	setData = (changedData) => {
		this.setState({
			data : changedData
		})
	}
	render = () => {
		return(
			<div className='App'>
				<Title />
				<div className='coins'>
					<Data />
					<Card />
				</div>
			</div>
		);
	}
}

export default App;