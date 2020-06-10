import React from 'react';
import './app.style.css';
import Title from './component/title/title.component';
import Card from './component/card/card.component';
import Data from './data/getData.component';
import ContextDetails from './component/modal/context.component';
import Modal from './component/modal/modal.component';

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

	sendContext = () => {
		return (
		<ContextDetails.Provider value={{data : this.state.data}} >
		<Modal />
		</ContextDetails.Provider>

		)
	}

	render(){
		return(
			<div className='App'>
				<Title />
				<div className='coins'>
				<Data setData={this.setData}/>
				</div>
			</div>
		);
	}
}

export default App;