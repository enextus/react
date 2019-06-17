import React from "react"

import './MainContent.css';

function MainContent() {

    const firstName = "Bob"
    const lastName = "Ziroll"

    return (
        <main className="main">
            ▍main element
            <br />
            {firstName + " " + lastName}
        </main>
    )
}

export default MainContent
