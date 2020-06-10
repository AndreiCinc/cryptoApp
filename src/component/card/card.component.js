import React, {useState} from 'react';
import './card.style.css';
import Converter from './converter/converter.component';
import Modal from '../modal/modal.component';
import NumberFormat from 'react-number-format'; 

export default function Card (props) {

	const [open, setOpen] = useState(false);

	const handlerClick = (e) => {
		setOpen(!open);
		props.openData();
	}
	const currencyFormat = () => {
		return (
			<NumberFormat 	value={props.price} 
							displayType={'text'}
							prefix={'$'} 
							thousandSeparator={true} 
			/>
		);
	}

	return(
		<div className="card">
			<div className="symbol gold">{props.symbol}</div>
			<div className="info">
				<div className="name">{props.name}</div>
				<div className="price">1 {props.symbol} = {currencyFormat()}</div>
				<Converter value={'2'}/>
				<Modal onClose={handlerClick} value={open} />
			</div>
			<div className="button" onClick={handlerClick}>Details</div>
		</div>
	);
}
