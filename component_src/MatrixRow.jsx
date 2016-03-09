import React from 'react';
import MatrixTd from './MatrixTd.jsx';

class MatrixRow extends React.Component {


	render(){
        let MatrixTds = <MatrixTd/>;
              
		return (
            
           <tr>
               {MatrixTds}
           </tr>
		)
	}
}


export default MatrixRow