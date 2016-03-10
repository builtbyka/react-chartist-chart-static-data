import React from 'react';
import MatrixInput from './MatrixInput.jsx';
import ChartistGraph from 'react-chartist';


class App extends React.Component {

	constructor(props){
		super(props);
        this.state = {
            options : ['Affective', 'Cognitive', 'Another'],
            inptype : 'radio',
            labels : ['date','movie','gift','what'],
            series : [[1, 2, 4, 8],[3, 2, 5, 1],[1, 1, 1, 2]],
            graphOps : {},
        };
	}

	render(){

    var type = 'Bar'
		return (
			<div>
                  <MatrixInput options={this.state.options} type={this.state.inptype} questions={this.state.labels}/>
                  <ChartistGraph data={this.state} options={this.state.graphOps} type={type} />
			</div>
		)
	}
}

export default App