import React from 'react';
import './search.style.css';

class Search extends React.Component {
	render(){
		return (
		    <form onSubmit={this.handleSubmit}>
			    <label >
				    <input className="search" type="text"
				     placeholder="Insert a Top & Press Enter" 
				     onChange={this.handleChange} />
			    </label>
		    </form>
		)
	}
}

export default Search;