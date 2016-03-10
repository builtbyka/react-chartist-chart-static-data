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
            type : 'Bar',
            answers : []
        };
        this.updateAnswers = this.updateAnswers.bind(this);
	}
    
    updateAnswers(e){
        let name = e.currentTarget.name,
            value = e.currentTarget.value,
            answersCopy = this.state.answers.slice(0),
            found = false;
            answersCopy.forEach(
                answer => {
                    if(name === answer.name){
                        answer.value = value;
                        found = true;
                    }
                }
            )
        
        if(found === false){
             answersCopy.push({name:name, value:value});
        }
        
        this.setState({answers:answersCopy});
        
    }

	render(){

        console.log(this.state.answers);
		return (
			<div>
                  <MatrixInput options={this.state.options} type={this.state.inptype} questions={this.state.labels} updateAnswers={this.updateAnswers}/>
                  <ChartistGraph data={this.state} options={this.state.graphOps} type={this.state.type} />
			</div>
		)
	}
}

export default App