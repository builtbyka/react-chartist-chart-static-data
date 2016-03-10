import React from 'react';

class Inputs extends React.Component {
    

	render(){
            
        let {type, name, val} = this.props;

		return (
           <div>
            <input onChange={this.props.updateAnswers} type={type} name={name} value={val}/>
          </div> 
		)
	}
}


export default Inputs