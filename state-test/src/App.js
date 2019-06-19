import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"

class App extends Component {

  constructor() {
      super()
      this.state = {
        answer: "Yes"
      }
  }

  render() {

    // put some code here

    return (
      <div>
        <h1>Is state important to know?</h1>
        <ChildComponent answer={this.state.answer}/>
      </div>
    )
  }
}

export default App
