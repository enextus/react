import React from 'react';
import './App.css';
import ComponentOne from './componentone.jsx'
import ComponentTwo from './componenttwo.jsx'
import User from './User'


const userData = {
  name: 'Luka',
  surname: 'Usatyj',
  age: 28,
};

class App extends React.Component {

  // getUserData() {
  //   const userData = fetch();
  // ...
  // ...
  // }

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
