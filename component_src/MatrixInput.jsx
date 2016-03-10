import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            options : ['Affective', 'Cognitive', 'Another'],
            type : 'textarea',
            questions : ['date','movie','gift','what'],
        };
       
    }
    

	render(){
         let ElsAmount = this.state.options.length,
         MatrixRows = this.state.questions.map(
            td => {
                return(
                  <MatrixRow BodyRows={td} TdAmount={ElsAmount} InputType={this.state.type}/>
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