import React, {useState} from 'react';
import './card.style.css';
import Converter from './converter/converter.component';
import SetModal from '../modal/modal.component';
import NumberFormat from 'react-number-format'; 

export default function Card (props) {

	const [open, setOpen] = useState(false);

	const handlerClick = e => {
		setOpen(!open);
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
	return (
		<div className="card">
			<div className="symbol gold">{props.symbol}</div>
				<div className="info">
					<div className="name">{props.name}</div>
					<div className="price">1 {props.symbol} = {currencyFormat()}</div>
					<Converter value={'2'}/>
					<SetModal 
						onClose={handlerClick}
						value={open} 
						name={props.name}
						rank={props.rank}
						market_cap={props.market_cap}
						percent_1h={props.percent_1h}
						percent_7d={props.percent_7d}
						percent_24h={props.percent_24h}
						supply={props.supply}
					/>
				</div>
				<div className="button" onClick={handlerClick}>Details</div>
		</div>
	);
}
