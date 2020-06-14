import React, {useState, useContext, useEffect} from 'react';
import './card.style.css';
import Converter from './converter/converter.component';
import Modal from '../modal/modal.component';
import NumberFormat from 'react-number-format'; 
import DataProvider from '../../data/getData.component';

export default function Card (props) {

	const [open, setOpen] = useState(false);
  	const [data, setData] = useState('12-06-2020');
	const [symbol, setSymbol] = useState('mai');
	const [name, setName] = useState(null);
	const [price, setPrice] = useState(null);
	const [key, setKey] = useState(null);

	const detailsContext = useContext(DataProvider);

	const details = detailsContext => {
		return detailsContext.data.map((object, index) => {
		})
	}
	const handlerClick = e => {
		setOpen(!open);
		setData(props.data);
	}
	const currencyFormat = () => {
		return (
			<NumberFormat 	value={price} 
							displayType={'text'}
							prefix={'$'} 
							thousandSeparator={true} 
			/>
		);
	}
	useEffect(() => {
		fetch('https://api.coinlore.net/api/tickers/?')
			.then((response) => response.json())
			.then((response) => {setData(response)});
		setSymbol(data.symbol);
	})
	return (
		<div className="card">
			<div className="symbol gold">{symbol}</div>
				<div className="info">
					<div className="name">{name}</div>
					<div className="price">1 {symbol} = {currencyFormat()}</div>
					<Converter value={'2'}/>
					<Modal onClose={handlerClick} value={open} />
				</div>
				<div className="button" onClick={handlerClick}>Details</div>
		</div>
	);
}
