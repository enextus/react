import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    let logged

    if (this.state.isLoggedIn === true) {
      logged = "in"
    } else {
      logged = "out"
    }

    return (
      <div>
        {/* <h1 style={{ display: this.state.isLoggedIn ? "block" : "none" }}>You are currently logged in. </h1> */}
        {/* <h1 style={{ display: !this.state.isLoggedIn  && "none" }}>You are currently logged in. </h1> */}
        <h1>You are currently logged {logged}. </h1>
      </div>
    )
  }
}
