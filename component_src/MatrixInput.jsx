import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {
    

	render(){
        let MatrixHeaderRows = <MatrixHeaderRow/>
        let MatrixRows = <MatrixRow/>;
		return (
			<table>
                <thead>
                    {MatrixHeaderRows}
                </thead>
                <tbody>
                    {MatrixRows}
                 </tbody>
			</table>
		)
	}
}

export default Matrix