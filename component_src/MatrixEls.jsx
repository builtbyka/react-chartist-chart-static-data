import React from 'react';
import Input from './Inputs.jsx';
import Textarea from './Textarea.jsx';

class MatrixEl extends React.Component {

	render(){    
        let tdInput = (this.props.inpType === 'textarea' ? <Textarea/> : <Input inType={this.props.inpType}/>);
         
		return (
           <td>{tdInput}</td>
		)
	}
}


export default MatrixEl