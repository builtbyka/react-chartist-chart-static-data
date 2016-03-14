import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {

	render(){
         let ElsAmount = this.props.options.length,
         counter = 0,
         MatrixRows = this.props.questions.map(
            td => {
                counter ++;
                return(
                  <MatrixRow key={counter} BodyRows={td} BodyVals={this.props.options} TdAmount={ElsAmount} InputType={this.props.type} updateAnswers={this.props.updateAnswers}/>
                )
            }
        )
		return (
            <div>
                <table>
                    <thead>
                        <MatrixHeaderRow  HeaderRows={this.props.options}/>
                    </thead>
                    <tbody>
                        {MatrixRows}
                    </tbody>
                </table>
                <button onClick={this.props.updateSeries}>Submit</button>
            </div>
		)
	}
}

export default Matrix