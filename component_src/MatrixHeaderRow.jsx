import React from 'react';
import MatrixHeaderEl from './MatrixHeaderEls.jsx';

class MatrixHeader extends React.Component {


	render(){
        
        let MatrixHeaderEls = <MatrixHeaderEl/>
              
		return (
            
           <tr>
                {MatrixHeaderEls}
                
           </tr>
		)
	}
}


export default MatrixHeader