import React from 'react';
import MatrixInput from './MatrixInput.jsx';


class App extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
                  <MatrixInput/>
			</div>
		)
	}
}

export default App