import React from 'react';
import Input from './Inputs.jsx';

class MatrixEl extends React.Component {

	render(){    
        let tdInput = (this.props.inpType === 'textarea' ? '' : <Input inType={this.props.inpType}/>);
         
		return (
           <td>{tdInput}</td>
		)
	}
}


export default MatrixEl