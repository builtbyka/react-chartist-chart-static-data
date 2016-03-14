import React from 'react';
import MatrixHeaderEl from './MatrixHeaderEls.jsx';

class MatrixHeader extends React.Component {


	render(){
        
        let counter = 0,
            MatrixHeaderEls = this.props.HeaderRows.map(
            th => {
                counter ++;
                return(
                    <MatrixHeaderEl key={counter} HeaderEl={th}/>
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