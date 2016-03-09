import React from 'react';
import MatrixHeaderEl from './MatrixHeaderEls.jsx';

class MatrixHeader extends React.Component {


	render(){
        
        let MatrixHeaderEls = this.props.HeaderRows.map(
            th => {
                return(
                    <MatrixHeaderEl HeaderEl={th}/>
                )
            }
        )
              
		return (
            
           <tr>
                <th></th>
                {MatrixHeaderEls}
                
           </tr>
		)
	}
}


export default MatrixHeader