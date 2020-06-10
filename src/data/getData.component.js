import React from 'react';
import Card from '../component/card/card.component';


export default class Data extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			data : null,
			checkData : false,
			querry : '2',
		}
		this.setData = this.setData.bind(this);
	}

	componentDidMount = () => {
		fetch('https://api.coinlore.net/api/tickers/?')
			.then((response) => response.json())
			.then((response) => {this.setState({data : response, checkData : true})});
	}

	cardDetails = () => {
		return (
			this.state.data.data.map((object, index) => (
				<Card 	key={index} 
						price={object.price_usd} 
						symbol={object.symbol}
						name={object.name}
						openData={this.setData}
				/>
			))
		);
	}

	setData = () => { 
		this.props.setData(this.state.data);
	}

	render () {
		if (this.state.checkData) {
			console.log(this.state.data);
			return (
				<div> 
					{this.cardDetails()}
				</div>
			);
		}
		return null;
	}
}