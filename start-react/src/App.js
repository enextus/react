import React from 'react';
import './App.css';
import ComponentOne from './componentone.jsx'
import ComponentTwo from './componenttwo.jsx'
import User from './User'


const userData = {
  name: 'Boyd',
  surname: 'Mitchener',
  age: 60,
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
        <ComponentTwo />
        <User userData={userData} rating={userData.age * 0.48} />
      </div>
    )
  }
}

export default App;
