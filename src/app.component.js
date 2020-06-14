import React from 'react';
import './app.style.css';
import Title from './component/title/title.component';
import Card from './component/card/card.component';
import DataProvider from './data/getData.component';


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
		//alert(this.state.data.data);
	}



	render(){
		return(
			<div className='App'>
			<DataProvider>
				<Title />
				<div className='coins'>
				<DataProvider setData={this.setData}/>
				<Card />
				</div>
			</DataProvider>
			</div>
		);
	}
}

export default App;