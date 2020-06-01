import React from 'react';
import './app.style.css';
import Title from '../title/title.component';
import Card from '../card/card.component';
import Welcome from '../welcome/welcome.component';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data : null,
			checkData : false,
			limit : ''
		}	
	}
	getData = ()  => {
			fetch('https://api.coinlore.net/api/tickers/?limit=' + this.state.limit)
			.then((response) => response.json())
			.then((response) => {this.setState({data : response, checkData : true})});
	}
	componentDidMount = () => {
			this.getData();
		} 

	displayCoins = () => {
		return( 
			this.state.data.data.map((object, index) => (
				<Card key = {index} symbol ={object.symbol} supply={object.tsupply} name={object.name} price={object.price_usd} event={(e) => 
					this.viewDetails(object.id, e)}/>
				)
			)
		);
	}
	viewDetails = (id) => { 
		let i;
		for(i = 0; i < this.state.limit; i++) { 
			if(this.state.data.data[i].id === id) {
				alert('Rank: ' + this.state.data.data[i].rank + 
					 "\n 1h ($):  " + this.state.data.data[i].percent_change_1h + ' %' +
					 "\n 24h($):  " + this.state.data.data[i].percent_change_24h + ' %' +
					 "\n 7d ($):  " + this.state.data.data[i].percent_change_7d + ' %' +
					 "\n Market Cap($): " + this.state.data.data[i].market_cap_usd
					 );
			}
		}
	}
	render(){
		console.log(this.state.data);
		if(this.state.checkData && this.state.limit){
			return(
			<div className="App"> 
				<Title />
				<div className="coins">
				{this.displayCoins()}
				</div>
			</div>
			)
		}else if (this.state.limit === '' && this.state.checkData) {
			return(
			<div className="App"> 
				<Title />
				<Welcome />
			</div>
			);
		}else {
			return(
			<div>Loading</div>
			)
		}
	}
}

export default App;