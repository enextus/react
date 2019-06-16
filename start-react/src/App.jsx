import React from 'react';
import './App.css';
import ComponentOne from './Componentone.jsx'
import Table from './Table'
import User from './User'

const userData = {
  name: 'Boyd',
  surname: 'Mitchener',
  age: 60,
  еyeColor: 'Brown',
  children: {
    childOne: { name: 'Gussie', surname: 'Schiefelbein', age: '10', },
    childTwo:  { name: 'Wilda', surname: 'Stemple', age: '7', },
    childThree:  { name: 'Edgardo', surname: 'Maher', age: '12', },
    childFourth:  { name: 'Claudio', surname: 'Mcglothin', age: '16', },
    childFifth:  { name: 'Sabine', surname: 'Band', age: '19', },
    childSixth:  { name: 'Shoshana', surname: 'Mcfarland', age: '23', },
  },
};

// const userData = {
//   name: 'Luka',
//   surname: 'Usatyj',
//   age: 60,
// };

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ComponentOne />
        <Table userData={userData} rating={userData.age * 0.48} />
        <User userData={userData} rating={userData.age * 0.48} />
      </div>
    )
  }
}

export default App;
