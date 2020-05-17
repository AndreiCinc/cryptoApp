import React from 'react';
import './card.style.css';

class Card extends React.Component{
	render(){
		return(
			<div className="card">


				<div className="symbol gold">{this.props.symbol}</div>

				<div className="info">
					<div className="name">{this.props.name}</div>
					<div className="supply">Supply : {this.props.supply}</div>
					<div className="price">$500</div>
				</div>

				<div className="button" onClick={this.props.event}>Details</div>

			</div>
		)
	}
}

export default Card;