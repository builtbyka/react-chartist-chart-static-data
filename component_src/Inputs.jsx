import React from 'react';

class Inputs extends React.Component {

	render(){    
        let type = this.props.inType;
         
		return (
           <input type={type}/>
		)
	}
}


export default Inputs