import React from 'react';
import MatrixInput from './MatrixInput.jsx';
import ChartistGraph from 'react-chartist';
import ChartistLegend from './ChartistLegend.jsx';
import Fetch from 'isomorphic-fetch';


class App extends React.Component {
    
     componentDidMount() {

        fetch('http://main-1914118172.eu-west-1.elb.amazonaws.com/activities/charttest')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then((results) => {
                let series = [];
                results.forEach(
                    result =>{
                        let counter = 0;
                          for(let i in result){
                             if(i !== 'questionID'){
                                  if(series[counter] === undefined){
                                      series.push([]);
                                  }
                                  series[counter].push(result[i]);
                                  counter ++;
                              }
                          }
                    }
                )
                this.setState({series : series})
            });
    }

    componentWillUnmount() {
        //this is fine but overkill for the mo.
        //this.serverRequest.abort();
    }

	constructor(props){
		super(props);
        this.state = {
                    options : ['affirmative', 'cognitive'],
                    inptype : 'radio',
                    labels : ['date','movie','gift'],
                    graphOps : {},
                    type : 'Bar',
                    answers : [],
                    series: [],
                    userID:'mwellss',
                    instanceID:'TEST01',
                    versionID:'0.1.1',
                    timeStampUTC:'1457696167',
                    ip:'1.1.1.1',
                    enviroment:'Edx'
                };
        this.updateSeries = this.updateSeries.bind(this);
        this.updateAnswers = this.updateAnswers.bind(this);
	}
  
    
    updateSeries(e){
            let seriesOption,
            seriesLabel,
            seriesCopy = this.state.series.slice(0),
            submission = [
            ];
        
        //Update series and submission data
        
        this.state.answers.forEach(
            answer => {
                let submissionSegment = {userID: this.state.userID,
                instanceID:this.state.instanceID,
                versionID:this.state.versionID,
                enviroment:this.state.enviroment}
                this.state.options.forEach(function(value, i){
                    if(value === answer.value){
                        seriesOption = i;
                        submissionSegment[value] = 1;
                    } else{
                        submissionSegment[value] = 0;
                    } 
                })
                 this.state.labels.forEach(function(value, i){
                    if(value === answer.name){
                        seriesLabel = i;
                    }   
                })
                 seriesCopy[seriesOption][seriesLabel] += 1;
                 submissionSegment.questionID = answer.name;
                 submission.push(submissionSegment);
            }
        )
        
        //update the page
        
        this.setState({series: seriesCopy});
       
        //send data
        
        fetch('http://main-1914118172.eu-west-1.elb.amazonaws.com/activities/charttest', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission)
        }).then(response => console.log(response))
        
      
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
		return (
			<div>
                  <MatrixInput options={this.state.options} type={this.state.inptype} questions={this.state.labels} updateAnswers={this.updateAnswers} updateSeries={this.updateSeries}/>
                  <div style={styles.chart}>
                    <ChartistGraph data={this.state} options={this.state.graphOps} type={this.state.type} />
                  </div>
                  <ChartistLegend style="width: 20%" type={this.state.type} legend={this.state.options}/>
			</div>
		)
	}
}

let styles = {
    
    chart : {
        float: 'left',
         marginRight: '2%',
        width: '85%',
    }
    
}

export default App