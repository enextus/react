import React from 'react';
import './App.css';
import ComponentOne from './componentone.jsx'
import ComponentTwo from './componenttwo.jsx'
import User from './User'


const userData = {
  name: 'Vitaly',
  surname: 'Mir',
  age: 60,
  children: {
    childOne: 'Ivan',
    childTwo: 'Prokchor',
    childThree: 'Stephan',
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
