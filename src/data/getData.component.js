import React, {createContext} from 'react';
import Card from '../component/card/card.component';
import  SetModal from '../component/modal/modal.component'

export const DataContext = createContext(); 

export default class DataProvider extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			data : null,
			checkData : false,
		}
		this.setData = this.setData.bind(this);
	}
	componentDidMount = () => {
		fetch('https://api.coinlore.net/api/tickers/?')
			.then((response) => response.json())
			.then((response) => {this.setState({data : response, checkData : true})});
	}

	sendDetailsToCoins = () => {
		return (
			this.state.data.data.map((object, index) => {
				return (
					<Card 	key={index}
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
	setData = () => { 
		this.props.setData(this.state.data);
	} 
	render = () => {
		if (this.state.data) {
			console.log(this.state.data)
			return(
				this.sendDetailsToCoins()
			);
		}
		return(
			<div>Loading...</div>
		);
	}
}