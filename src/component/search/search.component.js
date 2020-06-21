import React from 'react';
import './search.style.css';

export default function Search (props) {

	return (
		<input className="input"
			type="text"
			placeholder="Search..." 
			title="Are you looking for a specific coin?"
			onChange={(e) => {props.handlerInput(e.target.value)}}
		/>
	);
}