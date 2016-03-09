import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            options : ['Affective', 'Cognitive'],
            type : 'radio',
            questions : ['date','movie','gift'],
        };
       
    }
    

	render(){
         let ElsAmount = this.state.options.length,
         MatrixRows = this.state.questions.map(
            td => {
                return(
                  <MatrixRow BodyRows={td} TdAmount={ElsAmount}/>
                )
            }
        )
		return (
			<table>
                <thead>
                    <MatrixHeaderRow  HeaderRows={this.state.options}/>
                </thead>
                <tbody>
                    {MatrixRows}
                 </tbody>
			</table>
		)
	}
}

export default Matrix