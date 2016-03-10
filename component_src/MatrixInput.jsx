import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {

	render(){
         let ElsAmount = this.props.options.length,
         MatrixRows = this.props.questions.map(
            td => {
                return(
                  <MatrixRow BodyRows={td} TdAmount={ElsAmount} InputType={this.props.type}/>
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
                <input type="submit"/>
            </div>
		)
	}
}

export default Matrix