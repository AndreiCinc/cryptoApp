import React from 'react';
import './app.style.css';
import Title from '../title/title.component';
import Card from '../card/card.component';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data : null,
			checkData : false,
		}
		var boxNum = 2;
	}
	getData = () => {
		fetch('https://api.coinlore.net/api/tickers/?start=0&limit={boxNum}')
		.then((response) => response.json())
		.then((response) => {this.setState({data : response, checkData : true, boxNum : 2})});
	}
	componentDidMount = () => {
	this.getData();
	}
	displayCoins = () => {
		return( 
			this.state.data.data.map( (object, index) => (
				<Card key = {index} symbol ={object.symbol} supply={object.tsupply} name={object.name} event={(e) => 
					this.viewDetails(object.id, e)}/>
			))
		);
	}
	viewDetails = (id) => {
		let i;
		for(i = 0; i < this.boxNum; i++) {
			if(this.state.data.data[i].id === id) {
				alert('Market Cap: ' + this.state.data.data[i].market_cap_usd);
			}
		}
	}
	render(){
		console.log(this.state.data);
		if(this.state.checkData){
			return(
			<div className="App">
				<Title />

				<div className="coins">
				{this.displayCoins()}
				</div>
			</div>
			)
		}
		else{
			return(
			<div>Loading</div>
			)
		}
	}
}

export default App;