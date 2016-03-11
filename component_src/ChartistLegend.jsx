import React from 'react';
import ChartistKey from './ChartistKey.jsx';

class ChartistLegend extends React.Component {
    

	render(){
            
        let {legend} = this.props;
        let keys = legend.map(
                    key => {
                        return (
                            <ChartistKey legkey={key}/>
                        )
                    }
                  )

		return (
          <dl>
            {keys}
        </dl>
		)
	}
}


export default ChartistLegend