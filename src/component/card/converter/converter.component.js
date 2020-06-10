import React from 'react';
import './converter.style.css';


export default function Converter (props) {
	return(
		<div className='converter'>
			<input style={{width : '35px', height : '15px'}} placeholder="       $" /> 
			<label>  = {props.value}</label>
		</div>
	);
}