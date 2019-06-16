import React from 'react';
import Columns from './Columns'
import './Table.css'; 

  class ComponentTwo extends React.Component {

    render() {

      console.log('items', this.props);
      
      return (

        <table class='table'>
          <tr>
            <Columns userData={this.props}/>
          </tr>
        </table>
        
      )
    }
  }

export default ComponentTwo;
