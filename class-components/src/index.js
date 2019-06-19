import React, {Component} from "react"
import ReactDOM from "react-dom"

// #1
class App extends Component {
    render() {
        return (
            <div>
                <Header username="vschool"/>
                <Greeting />
            </div>
        )    
    }
}

// #2
class Header extends Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
                {/* {this.props.name = "NoName"}  */}
                {/* если попытаться, в компоненте, основанном на классе, использовать конструкцию наподобие this.props.name = "NoName" — мы столкнёмся с сообщением об ошибке */}
            </header>
        )    
    }
}

// #3
class Greeting extends Component {
    render() {
        
        const date = new Date()
        const hours = date.getHours()
        const ttt = date.toUTCString()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        return (
            <h1>Good {timeOfDay} to you, sir or madam! ({ttt}, {hours} o'clock)</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))