import React from "react"

class App extends React.Component {
    render() {
        return(
            <div>
                <img src="https://media.giphy.com/media/11vhCpFcD3um7m/giphy.gif" alt="code works gif" 
                onMouseOver={() => alert("A mouse over event")}/>

                <br />
                <br />
                
                <button onClick={() => alert("I was clicked!")}> 
                    Click Me!
                </button>
            </div>
        )
    }
}
export default App