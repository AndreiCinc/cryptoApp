import React from 'react';

export default function Search () {

	const searching = () => {
		
	}

	return (
		<div className="search">
			<input type="text" title="Are you looking for a specific coin?"/>
			<button className="button" onClick={searching}>Search</button>
		</div>
	);
}