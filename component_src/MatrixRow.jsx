import React from 'react';
import MatrixEl from './MatrixEls.jsx';

class MatrixRow extends React.Component {


	render(){
        let tdAmount = this.props.TdAmount,
            inputType = this.props.InputType,
            el,
            tds = [],
            counter = 0,
            inputVals = this.props.BodyVals.map(
                vals => {
                    counter ++;
                    return(
                        <MatrixEl key={counter} updateAnswers={this.props.updateAnswers} inpType={inputType} names={this.props.BodyRows} inpValues={vals}/>
                    )
                }
            )
        // for(let i = 0; i < tdAmount; i++){
        //     tds.push(<MatrixEl inpType={inputType} names={this.props.BodyRows}/>);
        // };
              
		return (
            <tr>
               <td>{this.props.BodyRows}</td>
               {inputVals}
            </tr>
             
      
		)
	}
}


export default MatrixRow