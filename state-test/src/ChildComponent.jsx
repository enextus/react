import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h2 style={{color: "green", fontSize: "5em"}}>{this.props.answer}</h2>
            </div>
        )
    }
}
