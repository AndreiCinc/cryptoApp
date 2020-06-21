import React from 'react';
import Card from '../component/card/card.component';
import Search from '../component/search/search.component'

export default class DataProvider extends React.PureComponent{

	constructor(props) {
		super(props)
		this.state = {
			data : null,
			checkData : false,
			dataFiltered : [],
			inputQuery : ''
		}
		this.setInput = this.setInput.bind(this);
	}
	componentDidMount = () => {
		fetch('https://api.coinlore.net/api/tickers/?')
			.then((response) => response.json())
			.then((response) => {this.setState({data : response, checkData : true})})
			.then(() => {this.filterCoins()});
	}
	filterCoins = () => { 
		this.setState({dataFiltered: this.state.data.data.filter(
			data => { return data.nameid.toLowerCase().includes(this.state.inputQuery.toLowerCase());
				}
			)}
		);
	}
	viewDetails = () => {
		return (
			this.state.dataFiltered.map((object, index) => {
				return (
					<Card 	
						key={index}
						symbol={object.symbol}
						name={object.name}
						price={object.price_usd}
						market_cap={object.market_cap_usd}
						percent_1h={object.percent_change_1h}
						percent_7d={object.percent_change_7d}
						percent_24h={object.percent_change_24h}
						supply={object.tsupply}
						rank={object.rank}		
					/>
				);
			})
		);
	}
	setInput = async (input) => {
		await this.setState({inputQuery: input})
		this.filterCoins();
		console.log(this.state.inputQuery);
	}
	render = () => {
		if (this.state.data) {
			console.log(this.state.data)
			return(
				<>
				<Search 
					handlerInput={this.setInput}
					input={this.state.inputQuery}
					filter={this.filterCoins}
				/>
				{this.viewDetails()}
				</>
			);
		}
		return(
			<div>Loading...</div>
		);
	}
}