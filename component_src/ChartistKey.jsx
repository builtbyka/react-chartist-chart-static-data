import React from 'react';

class ChartistKey extends React.Component {
    

	render(){
        let cls ="leg-item-"+this.props.count;
		return (
            <li className={cls}>- {this.props.legkey}</li>
		)
	}
}


export default ChartistKey