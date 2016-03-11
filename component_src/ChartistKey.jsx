import React from 'react';

class ChartistKey extends React.Component {

	render(){
        let cls ="leg-item leg-item-"+this.props.count;
		return (
            <li><span className={cls}></span> - {this.props.legkey}</li>
		)
	}
}


export default ChartistKey