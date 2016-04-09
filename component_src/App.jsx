import React from 'react';
import MatrixInput from './MatrixInput.jsx';
import ChartistGraph from 'react-chartist';
import ChartistLegend from './ChartistLegend.jsx';


class App extends React.Component {

	constructor(props){
		super(props);
        this.state = {
            options : ['I love it', 'I hate it', 'I don\'t mind'],
            inptype : 'radio',
            labels : ['Marmite','Peanut butter','Jam','Nutella'],
            series : [[1, 2, 4, 8],[3, 2, 5, 1],[1, 1, 1, 2]],
            graphOps : {},
            type : 'Bar',
            answers : []
        };
        this.updateSeries = this.updateSeries.bind(this);
        this.updateAnswers = this.updateAnswers.bind(this);
	}
   
    
    updateSeries(e){
        let seriesOption,
            seriesLabel,
            seriesCopy = this.state.series.slice(0);
        this.state.answers.forEach(
            answer => {
                this.state.options.forEach(function(value, i){
                    if(value === answer.value){
                        seriesOption = i;
                    }   
                })
                 this.state.labels.forEach(function(value, i){
                    if(value === answer.name){
                        seriesLabel = i;
                    }   
                })
                 seriesCopy[seriesOption][seriesLabel] += 1;
            }
            
        )
        
        this.setState({series: seriesCopy});
       
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
        var overflow = {
            overflow: 'auto'
        };
		return (
			<div>
                <div style={overflow}>
                  <MatrixInput options={this.state.options} type={this.state.inptype} questions={this.state.labels} updateAnswers={this.updateAnswers} updateSeries={this.updateSeries}/>
                </div> 
                  <ChartistGraph data={this.state} options={this.state.graphOps} type={this.state.type} />
                  <ChartistLegend legend={this.state.options}/>
			</div>
		)
	}
}

export default App