import React from "react"

function Joke(props) {

    const { question = "Undefined", punchLine = "Undefined", } = props

    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke
