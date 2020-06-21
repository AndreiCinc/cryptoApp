import React, {useState} from 'react';
import './converter.style.css';

export default function Converter (props) {

	const [result, setResult] = useState(1);
	return(
		<div className='converter'>
			<input 
				style={{width : '40px', height : '15px'}} 
				placeholder= {props.value}
				onChange={(e) => {setResult((e.target.value / props.value).toFixed(5))}} /> 
			<label>  $ = {result} {props.symbol}</label>
		</div>
	);
}