import React from 'react';
import ChartistKey from './ChartistKey.jsx';

class ChartistLegend extends React.Component {

	render(){
            
        let {legend} = this.props,
            counter = 0,
            keys = legend.map(
                    key => {
                        return (
                            <ChartistKey type={this.props.type} legkey={key} count={counter}/>
                        )
                        counter ++;
                    }
                  )

		return (
          <ul className="chartist-legend">
            {keys}
        </ul>
		)
	}
}


export default ChartistLegend