import React from 'react';
import MatrixEl from './MatrixEls.jsx';

class MatrixRow extends React.Component {


	render(){
        let tdAmount = this.props.TdAmount,
        el;
        let tds = [];
        for(let i = 0; i < tdAmount; i++){
            tds.push(<MatrixEl/>);
        };
              
		return (
            <tr>
               <td>{this.props.BodyRows}</td>
               {tds}
            </tr>
             
      
		)
	}
}


export default MatrixRow