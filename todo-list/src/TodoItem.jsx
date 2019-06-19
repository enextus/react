import React from "react"

function TodoItem(props) {

    const { item: { id = "Unknown", text = "Undefined", completed = "Unknown" } } = props

    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed}/>
            <p>{id}. {text}</p>
        </div>
    )
}

export default TodoItem
