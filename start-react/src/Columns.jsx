import React from 'react';

class Columns extends React.Component {

    

    render() {
      
      console.log('items', this.props);

      return (
        <React.Fragment>
          <td>Hello {  }</td>
          <td>World</td>
        </React.Fragment>
      );
    }
  }
  
  export default Columns;