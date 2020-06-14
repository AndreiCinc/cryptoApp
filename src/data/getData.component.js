import React, {createContext} from 'react';
import Card from '../component/card/card.component';

export const DataContext = createContext(); 

export default class DataProvider extends React.Component{
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

	setData = () => { 
		this.props.setData(this.state.data);
	} 
	
	render = () => {
		if (this.state.data) {
			return(
				<DataContext.Provider value={this.state.data}>
					{this.props.children}
				</DataContext.Provider>
			);
		}
		return null;
	}
}