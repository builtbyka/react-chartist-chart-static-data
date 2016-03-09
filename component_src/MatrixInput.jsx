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
          let MatrixRows = this.state.questions.map(
            td => {
                return(
                  <MatrixRow/>
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