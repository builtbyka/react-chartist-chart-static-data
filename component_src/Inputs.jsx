import React from 'react';

class Inputs extends React.Component {

	render(){    
        let type = this.props.inType,
            name = this.props.name;
         
		return (
           <input type={type} name={name}/>
		)
	}
}


export default Inputs