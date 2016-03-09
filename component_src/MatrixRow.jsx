import React from 'react';
import MatrixEl from './MatrixEls.jsx';

class MatrixRow extends React.Component {


	render(){
        let MatrixEls = <MatrixEl/>
              
		return (
            
           <tr>  
                {MatrixEls}
           </tr>
		)
	}
}


export default MatrixRow