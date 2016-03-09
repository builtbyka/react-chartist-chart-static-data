import React from 'react';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {
    

	render(){
        let MatrixRows = <MatrixRow/>;
		return (
			<table>
                <tbody>
                    {MatrixRows}
                 </tbody>
			</table>
		)
	}
}

export default Matrix