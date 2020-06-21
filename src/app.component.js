import React from 'react';
import './app.style.css';
import Title from './component/title/title.component';
import Data from './data/getData.component';

class App extends React.Component {
	render = () => {
		return(
			<div className='App'>
				<Title />
				<div className='coins'>
					<Data />
				</div>
			</div>
		);
	}
}

export default App;