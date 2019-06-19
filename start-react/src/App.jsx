import React from 'react';
import './App.css';
import userData from "./UserData.jsx"
import ComponentOne from './Componentone.jsx'
import Table from './Table'
import User from './User'

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
