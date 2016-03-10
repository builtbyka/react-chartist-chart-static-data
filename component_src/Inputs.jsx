import React from 'react';

class Inputs extends React.Component {

	render(){    
        let type = this.props.inType,
            name = this.props.name,
            val = this.props.val;
         
		return (
           <input type={type} name={name} value={val}/>
		)
	}
}


export default Inputs